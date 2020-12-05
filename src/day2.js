function isValid1([low, high], letter, pw) {
    return [pw.split("").filter((p) => p === letter).length].filter((v) => v >= low).filter((v) => v <= high).length === 1;
}

function isValid2([low, high], letter, pw) {
    return !(pw[low - 1] === letter) !== !(pw[high - 1] === letter);
}

function parseLine(line) {
    var comps = line.split(" ");
    var [low, high] = comps[0].split("-").map(Number);
    var [letter] = comps[1].split(":");
    var pw = comps[2];
    return [[low, high], letter, pw];
}

function runDay2(input) {
    console.log(input.map(parseLine).filter((d) => isValid1(...d)).length);
    console.log(input.map(parseLine).filter((d) => isValid2(...d)).length);
}

module.exports = { runDay2 };
