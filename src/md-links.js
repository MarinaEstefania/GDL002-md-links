const mdLinks = require('./index.js');

const filePath = process.argv[2];

const resultReadFile  = mdLinks(filePath, null);

resultReadFile
    .then(
        (data)=> {
            const linkArray = findLinksInFile(data);
            const objArray = linkArray.map(putLinksInArray);
            console.log(objArray);
        }
    ).catch(
        (err)=> {
            console.error(err);
        }
    );

//Find Links in File
const findLinksInFile = (data) => {
    const regExp = /\[(.+)\]\((.+)\)/g;
    const matchLinks = data.match(regExp);
    return matchLinks;
};


// Create an objetc and put Links in an Array
const putLinksInArray = (mdLink) => {
    const regExp = /\[(.+)\]\((.+)\)/g;
    const obj = {};
    const groups = regExp.exec(mdLink);  // matching groups
    // 0 [Node.js](https://nodejs.org/en/)'
    // 1 Node.js
    // 2 https://nodejs.org/en/

    obj.text = groups[1];
    obj.link = groups[2];
    return obj;
};


const fetch = require('node-fetch');

function checkStatus(res) {
    if (res.ok) { // res.status >= 200 && res.status < 300
        console.log(res+'line46 ok 200-300')
        return res;
    } else {
        console.log('status ERROR line 49')
      /*   throw err(res.statusText); */
        
    }
}
 
fetch('https://www.npmjs.com/package/node-fetch')
    .then(checkStatus)
    .then(res => console.log('will not get here...'))
    .catch(
        (err)=> {
            console.error(err);
        }
    );
/* 
// validate status Link
const statusLink = (link) => {
   const regExp = /(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,5}/g
   const validLink = link.match(regExp);
   console.log('hi');
   return console.log(validLink);
} */
