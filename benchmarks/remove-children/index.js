var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

function init(parent) {
  var fragment = document.createDocumentFragment();
  var span;

  for (var i = 0, len = 1000; i < len; ++i) {
    span = document.createElement('span');
    span.appendChild(
      document.createTextNode('Hello!')
    );

    fragment.appendChild(span);
  }

  parent.appendChild(fragment);
}

suite.add('replaceChildren', function() {
  var div = document.createElement('div');

  init(div);

  document.body.appendChild(div);

  div.replaceChildren();

  document.body.removeChild(div);
});

suite.add('innerHTML', function() {
  var div = document.createElement('div');

  init(div);

  document.body.appendChild(div);

  div.innerHTML = '';

  document.body.removeChild(div);
});

suite.add('textContent', function() {
  var div = document.createElement('div');

  init(div);

  document.body.appendChild(div);

  div.textContent = '';

  document.body.removeChild(div);
});

suite.add('while remove lastChild', function() {
  var div = document.createElement('div');

  init(div);

  document.body.appendChild(div);

  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }

  document.body.removeChild(div);
});

suite.add('deleteContents', function() {
  var div = document.createElement('div');

  init(div);

  document.body.appendChild(div);

  var range = document.createRange();

  range.selectNodeContents(div);
  range.deleteContents();

  document.body.removeChild(div);
});

suite.add('cloneNode & replaceChild', function() {
  var div = document.createElement('div');

  init(div);

  document.body.appendChild(div);

  var clone = div.cloneNode(false);

  div.parentNode.replaceChild(clone, div);

  document.body.removeChild(clone);
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