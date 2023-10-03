const fs = require("fs");

fs.readdir('C:\\Users\\34615\\Desktop', function(err,archivos) {
    if(err) throw err;

    console.log(archivos)
})