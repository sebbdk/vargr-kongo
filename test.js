const kongo = require('./src/kongo');

const app = kongo({
    host: 'localhost',
    port: 27017,
    db: 'test',
    collections: [
        'test'
    ]
});

app.listen(4444);