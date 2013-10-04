module.exports = strip;
strip.reg = reg;

function strip(str) {
  return str.replace(/\(\?\#[^\)]*\)/g, '');
}

function reg(str, mod) {
  return new RegExp(strip(str), mod);
}

