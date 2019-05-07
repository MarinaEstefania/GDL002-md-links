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
        return console.log(chalk.green(`✔`,  res.status, 'This link is working OK: ') + res.url );
    }
    return console.log(chalk.red(`✖`, res.status, 'This link is broken: ') + res.url);
}

//function to Check link status
const fetchLinksStatus = (url) =>{
    fetch(url)
        .then(checkStatus)
        .catch(
            (err)=> {
                console.error(err);
            }
        );
    }

    //This part allows the user set options
    const filePath = process.argv[2];
    const optionSelected = process.argv[3];

    const resultReadFile = mdLinks(filePath, optionSelected);


    // Function to make validate option work
    const validateOption = () => {
        resultReadFile
        .then(data => {
            const linkArray = findLinksInFile(data);
            const objArray = linkArray.map(putLinksInArray);
            return objArray;})
        .then(data => {
            console.log(chalk.underline('Make an HTTP request to figure out if the links are working or not'));
            data.forEach(element => {
            return fetchLinksStatus(element.link);
            });
        })
        .catch(err => {
            console.error(err);
        });
    }

    //function to make NO OPTION work
    const noOptionSelected = () =>{
              resultReadFile.then(data => {
                const linkArray = findLinksInFile(data);
                const objArray = linkArray.map(putLinksInArray);
                console.log(chalk.underline('Printing found links and their title from the file given'));
                console.log(objArray);
                return objArray;
              });
}
//This part goes to the chosen option using a SWITCH
const flowDirection = setDirection => {
  switch (setDirection) {
    case 'validate':
      console.log(chalk.bold('VALIDATE option selected'));
      validateOption();
      break;

    case 'stats':
      console.log(chalk.bold('stats option selected'));
      console.log(chalk.underline('Working On It...'));
      break;

    case 'validate-stats':
      console.log(chalk.bold('validate&stats options selected'));
      console.log(chalk.underline('Working On It...'));
      break;

    default:
    console.log(chalk.bold('NO option selected'));
    noOptionSelected();
  }
};

flowDirection(optionSelected);



  /*   fetch('https://httpbin.org/status/400')
  .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
    });
*/

                /* const flowDirection = (setDirection) => {
                    if(setDirection == 'validate') {
                       return console.log('validate option')
                    }
                    if (setDirection == 'stats'){
                        return console.log('stats option')
                    }
                    if (setDirection == 'stats validate'){
                        return console.log('stats validate option')
                    }
                    return console.log('no option selected ')
                }
                 */