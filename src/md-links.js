//chmod +x md-links.js

const mdLinks ={};
//function define if it is an Absolute or a relative Path

const isItAnAbsolutePath = (pathGiven) => {

    const path = require('path');
    console.log (path.isAbsolute(pathGiven))
   return path.isAbsolute(pathGiven);
}

isItAnAbsolutePath('/foo/bar');

mdLinks.isItAnAbsolutePath = isItAnAbsolutePath

//unit test first example
const add = (x1, x2) => {
return x1+x2;
}

mdLinks.add = add;

module.exports = mdLinks;