var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hallo Welt! <a href="/awesome">Awesomeness</a> and <a href="/camping">Camping</a>.')
})

app.get('/awesome', function (req, res) {
  res.send('This page is awesome!')
})

app.get('/camping', function (req, res) {
  res.send('<img src="images/IMG_20170303_193711.jpg" width="600" />')
})

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})
