var path    = require('path')
,   express = require('express')
,   app     = express();

// Middlewares
app.use(express.static(path.join(__dirname, '../app')));

// Routes
app.get('/test', function (req, res) {
  var text = req.param('test') || 'nothing';

  res.status(200).send('<span id="result">' + text + '</span>');
});

// Start server
var server = app.listen(4000);