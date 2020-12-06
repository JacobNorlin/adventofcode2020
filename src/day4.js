function runDay4(input) {
    console.log(
        input
            .split("\n\n")
            .map((v) => v.split(/\s+/))
            .map((v) => v.map((u) => u.split(":")[0]))
            .filter((v) => ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].every((u) => v.indexOf(u) !== -1)).length
    );
    //professional js programmer btw
    console.log(
        input
            .split("\n\n")
            .map((v) => v.split(/\s+/))
            .map((v) => v.map((u) => u.split(":")))
            .filter((v) => ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].every((u) => v.map((c) => c[0]).indexOf(u) !== -1))
            .filter((v) =>
                v.every(
                    ([t, u]) =>
                        t !== undefined &&
                        u !== undefined &&
                        ((t === "byr" && Number(u) >= 1920 && Number(u) <= 2002) ||
                            (t === "iyr" && Number(u) >= 2010 && Number(u) <= 2020) ||
                            (t === "eyr" && Number(u) >= 2020 && u <= 2030) ||
                            (t === "hgt" && u.indexOf("cm") !== -1
                                ? Number(u.substring(0, u.indexOf("cm"))) >= 150 && Number(u.substring(0, u.indexOf("cm"))) <= 193
                                : u.indexOf("in") !== -1
                                ? Number(u.substring(0, u.indexOf("in"))) >= 59 && Number(u.substring(0, u.indexOf("in"))) <= 76
                                : false) ||
                            (t === "hcl" && u.match(/^#[0-9a-f]{3,6}$/i)) ||
                            (t === "ecl" && ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(u) !== -1) ||
                            (t === "pid" && u.length === 9 && !isNaN(Number(u))) ||
                            t === "cid")
                )
            ).length
    );
}

module.exports = { runDay4 };
