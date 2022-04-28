var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

function init(parent) {
  var span;

  for (var i = 0, len = 1000; i < len; ++i) {
    span = document.createElement('span');
    parent.appendChild(span);
    parent = span;
  }

  return span;
}

suite.add('while parentNode', function() {
  var div = document.createElement('div');

  var child = init(div);

  document.body.appendChild(div);

  var el = child;

  while (el !== div) {
    el = el.parentNode;
  }

  document.body.removeChild(div);
});

suite.add('while parentElement', function() {
  var div = document.createElement('div');

  var child = init(div);

  document.body.appendChild(div);

  var el = child;

  while (el !== div) {
    el = el.parentElement;
  }

  document.body.removeChild(div);
});

suite.add('closest', function() {
  var div = document.createElement('div');

  var child = init(div);

  document.body.appendChild(div);

  child.closest('div');

  document.body.removeChild(div);
});

suite.add('matches', function() {
  var div = document.createElement('div');

  var child = init(div);

  document.body.appendChild(div);

  child.matches('div span');

  document.body.removeChild(div);
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