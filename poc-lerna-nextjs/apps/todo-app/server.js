var path = require('path');

var express = require('express');
var app = express();

var compression = require('compression');

app.use(compression()); // <--- must be first

// serve static asset
app.use(express.static(path.join(__dirname, 'dist')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res){
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log('production express server running at localhost: ' + PORT);
});
