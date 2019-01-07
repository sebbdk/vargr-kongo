const kongo = require('./src/kongo');
const fs = require('fs');
const newman = require('newman'); // require newman in your project

const app = kongo({
    host: 'localhost',
    port: 27017,
    db: 'test',
    collections: [
        'test'
    ]
});

app.listen(4444);

const info = squadJSON = JSON.parse(fs.readFileSync('postman.json', 'utf8'));;

newman.run({
    collection: info,
    reporters: 'cli'
},  (err) => {
    if (err) { throw err; }
    console.log('collection run complete!');
});
