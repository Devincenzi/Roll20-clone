import {buildLookupIcon} from './dictionary.js';

let dictionary = {};
function initializeDictionary(){
    const returnedDictionary = buildLookupIcon();
    returnedDictionary.then(function(e){
        dictionary = e;
    });
}

initializeDictionary();