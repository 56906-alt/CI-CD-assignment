const fs = require('fs');

if (fs.existsSync('src/index.html')) {
    console.log("TEST PASSED: index.html file exists!");
    process.exit(0);
} else {
    console.log("TEST FAILED: index.html file missing!");
    process.exit(1);
}
