const path = require("path");
const { inputUtil } = require("./src/inputs/inputUtil");
const { runDay1 } = require("./src/day1");
const { runDay2 } = require("./src/day2");
const { runDay3 } = require("./src/day3");
const { runDay4 } = require("./src/day4");

function main(day) {
    console.log(`running ${day}`);
    switch (day) {
        case "day1":
            runDay1(inputUtil.getFileAsNumArr(path.join(__dirname, `src/inputs/${day}.txt`)));
            break;
        case "day2":
            runDay2(inputUtil.getFileAsTextArr(path.join(__dirname, `src/inputs/${day}.txt`)));
            break;
        case "day3":
            runDay3(inputUtil.getFileAsTextArr(path.join(__dirname, `src/inputs/${day}.txt`)));
            break;
        case "day4":
            runDay4(inputUtil.getFileAsStr(path.join(__dirname, `src/inputs/${day}.txt`)));
    }
}

const dayArg = process.argv[2];
main(dayArg);
