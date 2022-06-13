import {lookupIcon} from './dictionary.js';

//search data of named icon
lookupIcon("squareroot").then(e => console.log("index: ",e));
lookupIcon("divide").then(e => console.log("index: ",e));
