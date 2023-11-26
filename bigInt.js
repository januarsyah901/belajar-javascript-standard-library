function info(params) {
    console.info(params);
}
// big int
{
    const a = BigInt(Number.MAX_SAFE_INTEGER);

    const b = BigInt(Number.MAX_SAFE_INTEGER);

    const c = a + b;

    info(c);
    info(typeof(c));
}