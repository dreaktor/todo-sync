var express = require('express')
    , app     = express()
    , PouchDB = require('pouchdb');

var pouch = new PouchDB('todo');
// new PouchDB('myDB', {adapter: 'websql'});

app.use('/db', require('express-pouchdb')(PouchDB));
app.use(express.static(__dirname + '/public/'));
app.listen(3000);

console.log('TODO Sync server listening on port 3000');
console.log(pouch.adapter);