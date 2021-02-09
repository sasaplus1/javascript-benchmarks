var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

suite.add('arguments', function() {
  var o = { n: 0 };

  function fn(a, b, c, d, e) {
    if (a.n >= 1000) {
      return a.n;
    } else {
      a.n += 1;
      return fn(a, b, c, d, e);
    }
  }

  fn(o , '', false, null, undefined);
});

suite.add('closure', function() {
  (function(){
    var o = { n: 0 };

    function fn(b, c, d, e) {
      if (o.n >= 1000) {
        return o.n;
      } else {
        o.n += 1;
        return fn(b, c, d, e);
      }
    }

    fn('', false, null, undefined);
  }());
});

suite.on('start', function() {
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