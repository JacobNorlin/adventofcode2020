function runDay5(input) {
    console.log(
        input
            .map((l) =>
                [[l.substring(0, 7), l.substring(7)]]
                    .map(([r, c]) => [
                        r.split("").reduce(([u, l], v) => (v === "F" ? [u - ((u - l) >> 1), l] : [u, l + ((u - l) >> 1)]), [0b10000000, 0b00000000])[1],
                        c.split("").reduce(([u, l], v) => (v === "L" ? [u - ((u - l) >> 1), l] : [u, l + ((u - l) >> 1)]), [0b1000, 0b0000])[1],
                    ])
                    .map(([r, c]) => r * 8 + c)
            )
            .reduce((a, v) => Math.max(a, v), -1)
    );

    console.log(
        input
            .flatMap((l) =>
                [[l.substring(0, 7), l.substring(7)]]
                    .map(([r, c]) => [
                        r.split("").reduce(([u, l], v) => (v === "F" ? [u - ((u - l) >> 1), l] : [u, l + ((u - l) >> 1)]), [0b10000000, 0b00000000])[1],
                        c.split("").reduce(([u, l], v) => (v === "L" ? [u - ((u - l) >> 1), l] : [u, l + ((u - l) >> 1)]), [0b1000, 0b0000])[1],
                    ])
                    .map(([r, c]) => r * 8 + c)
            )
            .filter((v, _, a) => a.indexOf(v - 1) === -1 || a.indexOf(v + 1) === -1)
            .filter((v, _, a) => a.some((u) => Math.abs(v - u) === 2))[0] - 1
    );
}

module.exports = { runDay5 };
