import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

import { buildFile } from './buildSingleFile.js';
const pathFile = './minIcons/minIcons.js';

var dictionary = {};

const loadModule = async (modulePath) => {
    try {
      return await import(modulePath)
    } catch (e) {
      throw new ImportError(`Unable to import module ${modulePath}`)
    }
  }

async function makeImports() {
    const importedModule = await loadModule('./minIcons/minIcons.js');
    dictionary = importedModule.default;
}

export const lookupIcon = async (iconName)=>{
    if(!fs.existsSync(pathFile)){
        await buildFile();
        await makeImports();
        
        return dictionary[iconName];
    }

    if(Object.keys(dictionary).length === 0){
        await makeImports();

        return dictionary[iconName];
    }

    return dictionary[iconName];    
}