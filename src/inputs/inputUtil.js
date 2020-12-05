const fs = require("fs");

const inputUtil = {};

inputUtil.getFileAsNumArr = function getFileAsNumArr(path) {
    const text = fs.readFileSync(path, "utf-8");
    return text.split("\n").map(Number);
};

inputUtil.getFileAsTextArr = function getFileAsTextArr(path){
    const text = fs.readFileSync(path, 'utf-8');
    return text.split('\n');
}

module.exports = {
    inputUtil,
};
