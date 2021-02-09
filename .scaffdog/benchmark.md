---
name: 'benchmark'
root: '.'
output: 'benchmarks'
ignore: []
questions:
  value: 'Please enter benchmark name.'
---

# `{{ inputs.value }}/README.md`

```md
# {{ inputs.value }}

https://sasaplus1.github.io/javascript-benchmarks/benchmarks/{{ inputs.value }}
```

# `{{ inputs.value }}/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>{{ inputs.value }}</title>
    <script src="../lodash.js"></script>
    <script src="../benchmark.js"></script>
    <script src="./index.js"></script>
  </head>
  <body>
    <pre id="js-console">processing...</pre>
  </body>
</html>
```

# `{{ inputs.value }}/index.js`

```javascript
var isBrowser = typeof Benchmark !== 'undefined';

var suite = (isBrowser) ? new Benchmark.Suite() : new require('benchmark').Suite();

var _ = (isBrowser) ? _ : require('lodash');

suite.add('test1', function() {
});

suite.add('test2', function() {
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
```