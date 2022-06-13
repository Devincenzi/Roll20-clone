import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const xml2js = require('xml2js');
const { optimize } = require('svgo');

const pathIcons = "defaultIcons/";
const files = fs.readdirSync(pathIcons);

let icons = [];
const newFilePath = "minIcons/minIcons.js";
let newFile = "let dict = new Object();\nexport default dict = {\n";

let pathAttr;
function pathAttrs(d, transform, style, name) {
    return {
        pathD: d, pathTransform: transform, pathStyle: style, pathName: name
    }
}

export const buildFile = async function BuildFile() {
    CreateIconData();

    icons.forEach(iconData => {
        console.log(iconData);
        let fileString = "";
        fileString += "'"+iconData.pathName+"' : {";
        fileString += "d:'"+iconData.pathD+"',";
        fileString += "transform:'"+iconData.pathTransform+"',";
        fileString += "style:'"+iconData.pathStyle+"'";
        fileString += "},\n";

        // console.log(iconData);
        newFile += fileString;
    });

    // console.log(icons);
    newFile += "}";

    return await fs.writeFileSync(newFilePath, newFile, err => {
        if (err) {
            console.error(err);
        }
    });
}

function CreateIconData(){
    files.forEach(file => {
        let iconName = file.split('.')[0];
        let fileContent = readSingleFile(file);

        let convertedFile = parseXML2JSON(fileContent);
        let jsonFile = JSON.parse(convertedFile);

        pathAttr = jsonFile.svg.path.pop().$;

        let newAttrs = pathAttrs(pathAttr.d, pathAttr.transform, pathAttr.style, iconName);

        icons.push(newAttrs);
    });
}

function readSingleFile(file){
    let svgContent = fs.readFileSync(`${pathIcons}/${file}`, "utf-8");
    let minSvg = optimizeSVG(svgContent);

    return minSvg;
}

function optimizeSVG(svg){
    let result = optimize(svg, {
        path: "path-to.svg",
        // all config fields are also available here
        multipass: true,
    });

    return result.data
}

function parseXML2JSON(dataToConvert){
    let convertedData = "";

    xml2js.parseString(dataToConvert, (err, result) => {
        if(err) {
            throw err;
        }

        // `result` is a JavaScript object
        // convert it to a JSON string
        convertedData = JSON.stringify(result, null, 2);
    });

    return convertedData;
}