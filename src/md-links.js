const mdLinks = require('./index.js');
const fetch = require('node-fetch');
const process = require('process');
const chalk = require('chalk');

//Find Links in File
const findLinksInFile = data => {
  const regExp = /\[(.+)\]\((.+)\)/g;
  const matchLinks = data.match(regExp);
  return matchLinks;
};

// Create an objetc and put Links in an Array
const putLinksInArray = mdLink => {
  const regExp = /\[(.+)\]\((.+)\)/g;
  const obj = {};
  const groups = regExp.exec(mdLink); // matching groups
  // 0 [Node.js](https://nodejs.org/en/)'
  // 1 Node.js
  // 2 https://nodejs.org/en/

  obj.text = groups[1];
  obj.link = groups[2];
  return obj;
};

// Check VALIDATE of every link using Library 'node-fetch'
const checkValidate = res => {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return console.log(chalk.green(`✔`, res.status, 'This link is working OK: ') + res.url);
  }
  return console.log(chalk.red(`✖`, res.status, 'This link is broken: ') + res.url);
};

//function to Check link VALIDATE
const fetchLinksValidate = url => {
  fetch(url)
    .then(checkValidate)
    .catch(err => {
      console.error(err);
    });
};

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
      return objArray;
    })
    .then(data => {
      console.log(
        chalk.underline('Make an HTTP request to figure out if the links are working or not'),
      );
      data.forEach(element => {
        return fetchLinksValidate(element.link);
      });
    })
    .catch(err => {
      console.error(err);
    });
};
//function to make STATS option work
const statsSelected = () => {
  resultReadFile
    .then(data => {
      const linkArray = findLinksInFile(data);
      const objArray = linkArray.map(putLinksInArray);
      return objArray;
    })
    .then(data => {
      console.log(chalk.underline('Print text with total links'));
      let totalLinks = 0;
      data.forEach(element => {
        element.link = 1;
        totalLinks = totalLinks + element.link;
      });
      console.log('Total Links :' + totalLinks);
    })
    .catch(err => {
      console.error(err);
    });
};
//function to make validate-stats work
const validateStatsOptionSelected = () => {
  resultReadFile
    .then(data => {
      const linkArray = findLinksInFile(data);
      const objArray = linkArray.map(putLinksInArray);
      return objArray;
    })
    .then(data => {
      console.log(chalk.underline('Print text with count of total, working and broken links'));
      let statusOK = 0;
      let statusFail = 0;
      let total = 0;
      data.forEach(element => {
        fetch(element.link)
          .then(data => {
            if (data.statusText != 'OK') {
              // res.status >= 200 && res.status < 300
              statusFail = statusFail + 1;
            } else {
              statusOK = statusOK + 1;
            }
            total = total + 1;

            console.log('Total Links: ' + total);
            console.log('Working Links :' + statusOK);
            console.log('Broken Links: ' + statusFail);
            console.log(' ');
            return total, statusOK, statusFail;
          })
          .catch(err => {
            console.error(err);
          });
      });
    })
    .catch(err => {
      console.error(err);
    });
};
//function to make NO OPTION work
const noOptionSelected = () => {
  resultReadFile.then(data => {
    const linkArray = findLinksInFile(data);
    const objArray = linkArray.map(putLinksInArray);
    console.log(chalk.underline('Printing found links and their title from the file given'));
    console.log(objArray);
    return objArray;
  });
};

//This part goes to the chosen option using a SWITCH
const flowDirection = setDirection => {
  switch (setDirection) {
    case 'validate':
      console.log(chalk.bold('VALIDATE option selected'));
      validateOption();
      break;

    case 'stats':
      console.log(chalk.bold('stats option selected'));
      statsSelected();
      break;

    case 'validate-stats':
      console.log(chalk.bold('validate&stats options selected'));
      validateStatsOptionSelected();
      break;

    default:
      console.log(chalk.bold('NO option selected'));
      noOptionSelected();
  }
};

flowDirection(optionSelected);
