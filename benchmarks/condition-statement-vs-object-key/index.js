var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

var o;
var v;
var noopIf;
var noopSwitch;
var noopObject;

suite.add('if', function() {
       if (v ===   1) {}
  else if (v ===   2) {}
  else if (v ===   3) {}
  else if (v ===   4) {}
  else if (v ===   5) {}
  else if (v ===   6) {}
  else if (v ===   7) {}
  else if (v ===   8) {}
  else if (v ===   9) {}
  else if (v ===  10) {}
  else if (v ===  11) {}
  else if (v ===  12) {}
  else if (v ===  13) {}
  else if (v ===  14) {}
  else if (v ===  15) {}
  else if (v ===  16) {}
  else if (v ===  17) {}
  else if (v ===  18) {}
  else if (v ===  19) {}
  else if (v ===  20) {}
  else if (v ===  21) {}
  else if (v ===  22) {}
  else if (v ===  23) {}
  else if (v ===  24) {}
  else if (v ===  25) {}
  else if (v ===  26) {}
  else if (v ===  27) {}
  else if (v ===  28) {}
  else if (v ===  29) {}
  else if (v ===  30) {}
  else if (v ===  31) {}
  else if (v ===  32) {}
  else if (v ===  33) {}
  else if (v ===  34) {}
  else if (v ===  35) {}
  else if (v ===  36) {}
  else if (v ===  37) {}
  else if (v ===  38) {}
  else if (v ===  39) {}
  else if (v ===  40) {}
  else if (v ===  41) {}
  else if (v ===  42) {}
  else if (v ===  43) {}
  else if (v ===  44) {}
  else if (v ===  45) {}
  else if (v ===  46) {}
  else if (v ===  47) {}
  else if (v ===  48) {}
  else if (v ===  49) {}
  else if (v ===  50) { noopIf(); }
  else if (v ===  51) {}
  else if (v ===  52) {}
  else if (v ===  53) {}
  else if (v ===  54) {}
  else if (v ===  55) {}
  else if (v ===  56) {}
  else if (v ===  57) {}
  else if (v ===  58) {}
  else if (v ===  59) {}
  else if (v ===  60) {}
  else if (v ===  61) {}
  else if (v ===  62) {}
  else if (v ===  63) {}
  else if (v ===  64) {}
  else if (v ===  65) {}
  else if (v ===  66) {}
  else if (v ===  67) {}
  else if (v ===  68) {}
  else if (v ===  69) {}
  else if (v ===  70) {}
  else if (v ===  71) {}
  else if (v ===  72) {}
  else if (v ===  73) {}
  else if (v ===  74) {}
  else if (v ===  75) {}
  else if (v ===  76) {}
  else if (v ===  77) {}
  else if (v ===  78) {}
  else if (v ===  79) {}
  else if (v ===  80) {}
  else if (v ===  81) {}
  else if (v ===  82) {}
  else if (v ===  83) {}
  else if (v ===  84) {}
  else if (v ===  85) {}
  else if (v ===  86) {}
  else if (v ===  87) {}
  else if (v ===  88) {}
  else if (v ===  89) {}
  else if (v ===  90) {}
  else if (v ===  91) {}
  else if (v ===  92) {}
  else if (v ===  93) {}
  else if (v ===  94) {}
  else if (v ===  95) {}
  else if (v ===  96) {}
  else if (v ===  97) {}
  else if (v ===  98) {}
  else if (v ===  99) {}
  else if (v === 100) {}
});

suite.add('switch', function() {
  switch (v) {
    case   1: break;
    case   2: break;
    case   3: break;
    case   4: break;
    case   5: break;
    case   6: break;
    case   7: break;
    case   8: break;
    case   9: break;
    case  10: break;
    case  11: break;
    case  12: break;
    case  13: break;
    case  14: break;
    case  15: break;
    case  16: break;
    case  17: break;
    case  18: break;
    case  19: break;
    case  20: break;
    case  21: break;
    case  22: break;
    case  23: break;
    case  24: break;
    case  25: break;
    case  26: break;
    case  27: break;
    case  28: break;
    case  29: break;
    case  30: break;
    case  31: break;
    case  32: break;
    case  33: break;
    case  34: break;
    case  35: break;
    case  36: break;
    case  37: break;
    case  38: break;
    case  39: break;
    case  40: break;
    case  41: break;
    case  42: break;
    case  43: break;
    case  44: break;
    case  45: break;
    case  46: break;
    case  47: break;
    case  48: break;
    case  49: break;
    case  50: noopSwitch(); break;
    case  51: break;
    case  52: break;
    case  53: break;
    case  54: break;
    case  55: break;
    case  56: break;
    case  57: break;
    case  58: break;
    case  59: break;
    case  60: break;
    case  61: break;
    case  62: break;
    case  63: break;
    case  64: break;
    case  65: break;
    case  66: break;
    case  67: break;
    case  68: break;
    case  69: break;
    case  70: break;
    case  71: break;
    case  72: break;
    case  73: break;
    case  74: break;
    case  75: break;
    case  76: break;
    case  77: break;
    case  78: break;
    case  79: break;
    case  80: break;
    case  81: break;
    case  82: break;
    case  83: break;
    case  84: break;
    case  85: break;
    case  86: break;
    case  87: break;
    case  88: break;
    case  89: break;
    case  90: break;
    case  91: break;
    case  92: break;
    case  93: break;
    case  94: break;
    case  95: break;
    case  96: break;
    case  97: break;
    case  98: break;
    case  99: break;
    case 100: break;
    default:
  }
});

suite.add('object', function() {
  o[v]();
});

suite.on('start', function() {
  o = {};
  v = 50;

  noopIf = function noop() {};
  noopSwitch = function noop() {};
  noopObject = function noop() {};

  for (var i = 1; i <= 100; ++i) {
    o[i] = i === v ? noopObject : function() {};
  }
});

suite.on('cycle', function(event) {
  console.log(String(event.target));
});

suite.on('complete', function() {
  var results = [];
  var fastest = 'Fastest is ' + this.filter('fastest').map('name');

  console.log(fastest);

  if (isBrowser) {
    console.log(this);

    for (var i = 0, len = this.length; i < len; ++i) {
      results.push(String(this[i]));
    }

    results.push(fastest);

    document.getElementById('js-console').innerHTML = results.join('<br>');
  }
});

suite.run({
  async: true
});