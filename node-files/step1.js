const fs = require('fs');
const argv = process.argv;
let path = argv[2]

function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            // handle possible error
            console.error(err);
            // kill the process and tell the shell it errored
            process.exit(1);
        }
        // otherwise success
        console.log(`file contents: ${data}`);
    });

    console.log('reading file'); if (path) {
    }
}

cat(path);