
// https://stackoverflow.com/questions/5917082/regular-expression-to-match-numbers-with-or-without-commas-and-decimals-in-text

const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")

export default numberWithCommas;