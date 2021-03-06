'use strict';

var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

var hasOwnProperty;

var o;
var forIn1;
var forIn2;
var objectKeys;
var objectPropertyNames;
var objectPropertyNamesAndSymbols;
var ownKeys;

suite.add('for-in 1 - for-in & hasOwnProperty & Array#push', function() {
  for (var key in o) {
    if (Object.prototype.hasOwnProperty.call(o, key)) {
      forIn1.push(key);
    }
  }
});

suite.add('for-in 2 - for-in & cached hasOwnProperty & Array#push', function() {
  for (var key in o) {
    if (hasOwnProperty.call(o, key)) {
      forIn2.push(key);
    }
  }
});

suite.add('for-in 3 - for-in & hasOwnProperty', function() {
  for (var key in o) {
    Object.prototype.hasOwnProperty.call(o, key);
  }
});

suite.add('for-in 4 - for-in & cached hasOwnProperty', function() {
  for (var key in o) {
    hasOwnProperty.call(o, key);
  }
});

suite.add('for-in 5 - for-in', function() {
  for (var key in o) {}
});

suite.add('Object.keys', function() {
  objectKeys = Object.keys(o);
});

suite.add('Object.getOwnPropertyNames', function() {
  objectPropertyNames = Object.getOwnPropertyNames(o);
});

suite.add('Object.getOwnPropertyNames & Object.getOwnPropertySymbols', function() {
  objectPropertyNamesAndSymbols =
    Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
});

suite.add('Reflect.ownKeys', function() {
  ownKeys = Reflect.ownKeys(o);
});

suite.on('start', function() {
  hasOwnProperty = Object.prototype.hasOwnProperty;

  o = {};

  for (var i = 1, len = 1000 + 1; i < len; ++i) {
    o['a'.repeat(i)] = null;
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