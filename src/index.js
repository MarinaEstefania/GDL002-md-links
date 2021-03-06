const fs = require('fs'); //import FileSystem module

const filePathFile = (filePath, options) => {
  return new Promise((resolve, reject)=> {
    fs.readFile(filePath, function(err, data){
      if (err){
        return reject(err);
      }
      resolve(data.toString());
    });
  });
};

module.exports = filePathFile