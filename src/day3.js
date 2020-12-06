const fn = (m, xd, yd) => m.filter((r, i) => i % yd === 0).filter((r, i) => r[(i * xd) % r.length] === "#").length;

function runDay3(input) {
    console.log(
        fn(
            input.map((v) => v.split("")),
            3,
            1
        )
    );
    console.log(
        [
            [1, 1],
            [3, 1],
            [5, 1],
            [7, 1],
            [1, 2],
        ]
            .map((p) => fn(input, ...p))
            .reduce((s, v) => s * v, 1)
    );
}

module.exports = { runDay3 };
