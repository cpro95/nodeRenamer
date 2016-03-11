var fs = require('fs');

exports.rename = function(file1, file2) {
    fs.renameSync(file1, file2);
    console.log("Rename completed : " + file1 + " renamed to " + file2);
};

exports.getBaseName = function(file1) {
  return file1.substring(0,file1.lastIndexOf('.'));
};

exports.getExtName = function(file1) {
  return file1.substring(file1.lastIndexOf('.'), file1.length);
};
