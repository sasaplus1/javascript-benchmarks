var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

var hasOwnProperty;

var o;
var forIn1;
var forIn2;
var objectKeys;

suite.add('for-in 1', function() {
  for (var key in o) {
    if (Object.prototype.hasOwnProperty.call(o, key)) {
      forIn1.push(key);
    }
  }
});

suite.add('for-in 2', function() {
  for (var key in o) {
    if (hasOwnProperty.call(o, key)) {
      forIn2.push(key);
    }
  }
});

suite.add('Object#keys', function() {
  objectKeys = Object.keys(o);
});

suite.on('start', function() {
  hasOwnProperty = Object.prototype.hasOwnProperty;

  o = {};

  var alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  for (var i = 0, len = alphabets.length; i < len; ++i) {
    o[alphabets[i]] = null;
  }

  forIn1 = [];
  forIn2 = [];
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