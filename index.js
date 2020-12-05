const path = require("path");
const { inputUtil } = require("./src/inputs/inputUtil");
const { runDay1 } = require("./src/day1");

function main(day) {
    console.log(`running ${day}`);
    const input = inputUtil.getFileAsNumArr(path.join(__dirname, `src/inputs/${day}.txt`));
    switch (day) {
        case "day1":
            runDay1(input);
            break;
    }
}

const dayArg = process.argv[2];
main(dayArg);
