var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

var o;
var a;
var s;
var m;
var ws;
var wm;

var compare;

suite.add('Set#has', function() {
  s.has(o);
});

suite.add('Map#has', function() {
  m.has(o);
});

suite.add('WeakSet#has', function() {
  ws.has(o);
});

suite.add('WeakMap#has', function() {
  wm.has(o);
});

suite.add('Array#includes', function() {
  a.includes(o);
});

suite.add('Array#find', function() {
  a.find(compare);
});

suite.add('Array#findIndex', function() {
  a.findIndex(compare);
});

suite.add('Array#indexOf', function() {
  a.indexOf(o);
});

suite.add('Array#lastIndexOf', function() {
  a.lastIndexOf(o);
});

suite.on('start', function() {
  o = {};
  a = [];

  compare = function compare(v) {
    return v === o;
  };

  for (var i = 0, len = 100000; i < len; ++i) {
    if (i === Math.floor(len / 2)) {
      a.push(o);
    } else {
      a.push({});
    }
  }

  s = new Set();

  for (var i = 0, len = a.length; i < len; ++i) {
    s.add(a[i]);
  }

  m = new Map();

  for (var i = 0, len = a.length; i < len; ++i) {
    m.set(a[i], a[i]);
  }

  ws = new WeakSet();

  for (var i = 0, len = a.length; i < len; ++i) {
    ws.add(a[i]);
  }

  wm = new WeakMap();

  for (var i = 0, len = a.length; i < len; ++i) {
    wm.set(a[i], a[i]);
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