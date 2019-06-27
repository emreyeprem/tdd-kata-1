module.exports = function add(input) {
  return input.split(',')
    .map(x => +x)
    .reduce((a, b) => a + b)
}
