
# Markdown Links Project

## Introduction

![enter image description here](https://lh3.googleusercontent.com/uSTulQK2T54AS2Dg2Qfxx77tfPhX6VRWiCdLeYEVf_rCPAzrlfyPw9G4BwJuYmpcDzl08vF5G3CQ1A)

  
  

This is a library created in JavaScript using **Node.js®** which is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

  

**This library can be used to check the links' file with .md (Markdown) extension and then report some statistics.**

The Flowchart's project goes like this:

  

![For better resolution click here](https://i.ibb.co/w0xwgcw/diagrama-markdown.png)

  

**Markdown** can be defined as a **plain text formatting syntax** used to write content on the web. It’s commonly used by writers and programmers to write quickly without having to take time using the formatting toolbar of text editors.

  

## How to use:

### Installation
At your console stay in the folder where you want to install the module and all you have to do is write this in the Command Line Interface (CLI):
**npm install MarinaEstefania/GDL002-md-links**

 ![Imgur](https://i.imgur.com/h7JB1Mz.png)

 Another thing you can do is **clone or download this repository** at your computer and then follow user guide.

### User Guide
A new folder should be created. Inside it you can find an exampleFile.md to practice but if you want to try with a diferent file you just have to make sure that enter the correct path in the CLI. 
At present, it only supports files.md wich means that you can't put a folder path but in the future I will be working on it.

Write in the CLI the standar sentense followed by one of the next key words to get into an option: 

standar sentence:
node pathOfTheFilemd-links.js fileToCheckLinks 

**Option 1:  don't write any option.**
Use this option if you want to print on screen all the links and their respective titles gotten from the file that you choose to check.

Example:   
node src/md-links.js src/exampleFile.md
![Imgur](https://imgur.com/nNWtl3d.png)
  
  **Option 2:  validate**
  Use this option if you want to see the list of links and its HTTP status codes. That way you could know if the url's are active or not.  

  Example:   
node src/md-links.js src/exampleFile.md **validate**
![Imgur](https://i.imgur.com/sHjNRMJ.png)
   
   **Option 3:  stats**
Use this option if you want to know the total amount of the links contained in the file given.
     Example:   
node src/md-links.js src/exampleFile.md **stats**![Imgur](https://i.imgur.com/64vMz89.png)

   **Option 4:  validate-stats**
Use this option to see the total of links, How many links are working and how many links presents bad request.
     Example:   
node src/md-links.js src/exampleFile.md **validate-stats**![Imgur](https://i.imgur.com/JzC0j5Z.png)

## Documentation

- [Node.js curso desde cero en Youtube](https://www.youtube.com/watch?v=BhvLIzVL8_o&list=LLgVy8kVPhtvLSTfZA3dqlYA&index=8&t=2194s)

- [Node Fetch package oficial documentation](https://www.npmjs.com/package/node-fetch)

- [NPM Install oficial documentation](https://docs.npmjs.com/cli/install)

  

- [Chalk package oficial documentation](https://www.npmjs.com/package/chalk)

- [Jest package oficial documentation](https://www.npmjs.com/package/jest)

- [Process (argv) oficial documentation](https://nodejs.org/docs/latest/api/process.html)

- [Match method MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/match)

- [Exec method MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp/exec)

- [Regular Expressions Maker](https://regexr.com/4cbcc)

- [Node.js](https://nodejs.org/en/).

- [Node.js File System documentation](https://nodejs.org/api/fs.html).

- [Node.js Path documentation](https://nodejs.org/api/path.html).

- [HTTP 400 and 500 Status Codes](https://developer.att.com/video-optimizer/docs/best-practices/http-400-and-500-error-codes)

- [Promises MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas)

- [forEach Method MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)

- [CLI ](https://www.proyectobyte.com/windows/simbolo-del-sistema/uso-la-interfaz-linea-comandos)
- [Guia test de codigo asincronico](https://doc.ebichu.cc/jest/docs/es-ES/asynchronous.html)