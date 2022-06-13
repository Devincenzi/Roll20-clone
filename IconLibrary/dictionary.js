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

export async function buildLookupIcon() {
    if(!fs.existsSync(pathFile)){
      await buildFile();        
    }

    const importedModule = await loadModule('./minIcons/minIcons.js');
    return importedModule.default;
}

// export const lookupIcon = async (iconName)=>{


//     if(Object.keys(dictionary).length === 0){
//         await makeImports();

//         return dictionary[iconName];
//     }

//     return dictionary[iconName];    
// }