const db = require('./mongodb');


db.connection('TimeEntry123', 'TimeEntry234', 3, {bla: "123"}, (err, results) => {
console.log(results);
});
