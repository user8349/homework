const a = [3, 2, 1]
const b = [3, 4, 2, 5]
const intersect = (arr1, arr2) => {
    const buffer = arr1.reduce((acc, val) => ({ ...acc, [val]: true }), {})
    return arr2.filter((item) => buffer[item])
}
console.log(intersect(a, b))
