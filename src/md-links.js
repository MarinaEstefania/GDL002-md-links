const mdLinks = require('./index.js');
const fetch = require('node-fetch');
const process = require('process');
const chalk = require('chalk');

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


// Check status of every link using Library 'node-fetch'
const checkStatus = (res) => {
    if (res.ok) { // res.status >= 200 && res.status < 300
        return console.log(chalk.green(`✔ `,  res.status, 'Working OK:') + res.url );
    }
    return console.log(chalk.red(`✖`, res.status, 'The next link is broken:') + res.url);
}

//function to
const fetchLinksStatus = (url) =>{
    fetch(url)
        .then(checkStatus)
        .catch(
            (err)=> {
                console.error(err);
            }
        );
    }


//Main Function
const filePath = process.argv[2];
const resultReadFile  = mdLinks(filePath, null);
resultReadFile
    .then(
        (data)=> {
            const linkArray = findLinksInFile(data);
            const objArray = linkArray.map(putLinksInArray);
            console.log('** LINKS GOTTEN:** ')
            console.log(objArray);
            return objArray;
        }
    ).then(
        (data) => {
            console.log('**R E S U L T S **')
            data.forEach(element => {
              return fetchLinksStatus(element.link) ;
            });
        }
    ).catch(
        (err)=> {
            console.error(err);
        }
    );


  /*   fetch('https://httpbin.org/status/400')
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
    }); */
/*

// validate status Link
const statusLink = (link) => {
   const regExp = /(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,5}/g
   const validLink = link.match(regExp);
   console.log('hi');
   return console.log(validLink);
} */
