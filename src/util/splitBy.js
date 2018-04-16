export default (str = '', delim = '|') =>
  str.split(delim).map(str => str.trim())
