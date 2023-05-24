
const primitiveCheck = (type, value) => {
  if(typeof value === type) return value;

  throw new Error(`\x1b[31m` + `Passed type ${typeof value}, expected ${type}.` + `\x1b[0m`);
};

const str = (value) => {
  return primitiveCheck('string', value);
};

const num = (value) => {
  return primitiveCheck('number', value);
};

const bool = (value) => {
  return primitiveCheck('boolean', value);
};

const undef = (value) => {
  return primitiveCheck('undefined', value);
};

const nul = (value) => {
  return primitiveCheck('null', value);
};

const sym = (value) => {
  return primitiveCheck('symbol', value);
};

const func = (value, expectedFunc = 'function') => {
  if(expectedFunc === 'function'){
    return primitiveCheck(expectedFunc, value);
  } else {
    if(value === expectedFunc) return value;

    throw new Error(`\x1b[31m` + `Passed type ${typeof value}, expected ${expectedFunc.name}.` + `\x1b[0m`);
  }
};

const obj = (value, expectedObj = 'object') => {
  if(expectedObj === 'object'){
    if(typeof value === 'object') return value;
    throw new Error(`\x1b[31m` + `Passed type ${typeof value}, expected ${expectedObj}.` + `\x1b[0m`);
  } else {
    if(value instanceof expectedObj) return value;

    throw new Error(`\x1b[31m` + `Passed type ${typeof value}, expected ${expectedObj.name}.` + `\x1b[0m`);
  }
};

module.exports = { str, num, bool, undef, nul, sym, func, obj };
