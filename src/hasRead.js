const fs = require('fs');
const path = require('path')


// Check if read right on file
function hasRead(filePath) {
    const file = path.resolve(filePath);
    try {
        fs.accessSync(filePath, fs.constants.R_OK);
        return true;
    }
    catch(err) {
        return false;
    }
}


module.exports = hasRead;