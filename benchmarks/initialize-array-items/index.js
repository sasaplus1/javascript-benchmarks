var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

suite.add('push to empty array', function() {
  var a = [];

  for (var i = 0; i < 1000000; i += 1) {
    a.push(null);
  }
});

suite.add('substitute value to empty array', function() {
  var a = [];

  for (var i = 0; i < 1000000; i += 1) {
    a[i] = null;
  }
});

suite.add('substitute value to initialized array', function() {
  var a = new Array(1000000);

  for (var i = 0; i < 1000000; i += 1) {
    a[i] = null;
  }
});

suite.add('fill initialized array', function() {
  var a = new Array(1000000);

  a.fill(null);
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