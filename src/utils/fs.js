const fs = require('fs');
const path = require('path');


const readFile = (pathFile) => {
   return fs.readFileSync(pathFile, "utf-8");
};

const writeFile = (pathFile, data) => {
   return fs.writeFileSync(pathFile, data, "utf-8");
};

const parseFile = (json) => {
   return JSON.parse(json);
}

const stringifyFile = (objeto) => {
   return JSON.stringify(objeto);
}

const readJson = (pathFile = "") => {
   return JSON.parse(fs.readFileSync(path.join(__dirname, pathFile),'utf-8'));
}

const saveJson = (pathFile = "", array = []) => {
   fs.writeFileSync(path.join(__dirname, pathFile), JSON.stringify(array, null, 2), 'utf-8');
   return null;
}

module.exports = {
   readFile,
   writeFile,
   parseFile,
   stringifyFile,    
   readJson,
   saveJson
}