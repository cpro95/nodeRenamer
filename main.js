// rename program for movie and subtitle files
// author : cpro95@gmail.com
// it is a just practice version


var fs = require('fs');

// classifying media files from all files
// return array
function readMediaFiles(filesArr){
  var mediaArr1 = [];
  for(var i in filesArr) {
    if(filesArr[i].endsWith('.mkv')) {
      mediaArr1.push(filesArr[i]);
    } else {
      if(filesArr[i].endsWith('.avi')) {
        mediaArr1.push(filesArr[i]);
      } else {
        if(filesArr[i].endsWith('.mp4')) {
          mediaArr1.push(filesArr[i]);
        }
      }
    }
  }
  return mediaArr1;
}

// classifying subtitle files from all files
// return array
function readSubtitleFiles(filesArr) {
  var mediaArr2 = [];
  for(var i in filesArr) {
    if(filesArr[i].endsWith('.smi')) {
      mediaArr2.push(filesArr[i]);
    } else {
      if(filesArr[i].endsWith('.smil')) {
        mediaArr2.push(filesArr[i]);
      } else {
        if(filesArr[i].endsWith('.srt')) {
          mediaArr2.push(filesArr[i]);
        }
      }
    }
  }
  return mediaArr2;
}



// Main Procedures
// console.log(black.bgWhite("Media Files Extension Renamer. Version 0.1"));
console.log("Now Reading directory.....");

// read directory and save it to filesArr
var filesArr = fs.readdirSync('./');

console.log("Reading is completed.....");
console.log("Now Classifying Media Files.....");

// call function of readMediaFiles
var mediaArr1 = readMediaFiles(filesArr);
console.log(mediaArr1);

// console.log("Now Sorting.....");
// mediaArr1 = mediaArr1.sort();
// console.log(mediaArr1);

console.log("Now Classifying Subtitle Files.....");
var mediaArr2 = readSubtitleFiles(filesArr);
console.log(mediaArr2);

console.log("=====================================");
console.log("Search counts are:");
console.log("Media:" + mediaArr1.length + " Subtitle: " + mediaArr2.length);

if(mediaArr1.length !== mediaArr2.length) {
  console.log("Counts do not match, Please modify files.");
  console.log("=====================================");
}
else {
  console.log("=====================================");
  askYesNo();
}


//////////////////////////////
// ask Y & N function
/////////////////////////////
function askYesNo() {
  console.log("Do you want to rename media files? (Y/N)");

  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');

  process.stdin.on('data', function (text) {
    // console.log(util.inspect(text));
    if (text === 'y\r\n') {
      doRename();
    } else if(text ==='n\r\n') {
      doNotRename();
    }

  });

}

function doNotRename() {
  console.log('You entered NO, now quitting');
  process.exit();
}

function doRename() {
  console.log('Now renaming Media files....');

  for(var j in mediaArr1) {
    console.log(mediaArr1[j] + " =====> " + mediaArr2[j]);
  }


  var renameUtils = require('./renameUtils.js');
  // console.log(renameUtils.getBaseName(mediaArr1[0]));
  // console.log(renameUtils.getExtName(mediaArr1[0]));
  // renameUtils.rename(mediaArr1[0], "test3.mkv");

  // loop of rename execution
  for(var i in mediaArr1) {
    // console.log(renameUtils.getBaseName(mediaArr1[i])+renameUtils.getExtName(mediaArr2[i]));
    renameUtils.rename(mediaArr2[i], renameUtils.getBaseName(mediaArr1[i])+renameUtils.getExtName(mediaArr2[i]));
  }

  process.exit();
}
