const fs = require("fs");
const os = require("os");

const inputUtil = {};

inputUtil.getFileAsNumArr = function getFileAsNumArr(path) {
    const text = fs.readFileSync(path, "utf-8");
    return text.split("\n").map(Number);
};

inputUtil.getFileAsTextArr = function getFileAsTextArr(path) {
    const text = fs.readFileSync(path, "utf-8");
    return text.split(os.EOL);
};

module.exports = {
    inputUtil,
};
