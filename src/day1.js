const fn = (ns, ts, k) =>
    Array.from(Array(k - 1))
        .reduce(
            (acc) => acc.flatMap((u) => ns.slice(ns.indexOf(u[0]) - 1).map((v) => [u, v].flat())),
            ns.map((v) => [v])
        )
        .filter((c) => c.reduce((s, v) => s + v, 0) === ts)
        .shift()
        .reduce((p, v) => p * v, 1);

function runDay1(input) {
    console.log(fn(input, 2020, 2));
    console.log(fn(input, 2020, 3));
}

module.exports = { runDay1 };
