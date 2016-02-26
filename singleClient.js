var pg = require('pg');
var connectionString = 'postgres://localhost:5432/pgintro';
// var client = new pg.Client(connectionString);
// client.connect();
// pg.connect(connectionString, function(err, client, done){
//   if (err) {
//     done();
//     console.log('Error fetching client: ' + err);
//   }

//   var query = client.query('SELECT * FROM cities');
//   query.on('row', function(row){
//     console.log(row);
//   });

//   query.on('end', function(row){
//     done();
//     pg.end();
//   });
// });

// client.query("SELECT * FROM cities", function(err, result){
//   console.log(result.rows);
// })

// client.query("INSERT INTO cities VALUES (DEFAULT, 'Boston', 'USA', 2)", function(err, result){
//   console.log(result.rows);
// })




function selectOne(id){
  var results = [];
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      done();
      console.log('Error fetching client: ' + err);
    }
    var query = client.query("SELECT * FROM CITIES WHERE id='"+id+"'");
    query.on('row', function(row){
      results.push(row);
    });
    query.on('end', function(row){
      done();
      return results;
      pg.end();
    });
  });
}

// selectOne(2);

console.log(selectOne(2));

// function updateName(id, newName){
//   var query = client.query("UPDATE cities SET name='"+newName+"' WHERE id='"+id+"'", function(err, result){
//     return "Updated!";
//   })
// }

// function deleteRow(id){
//   var query = client.query("DELETE FROM cities WHERE id='"+id+"'", function(err, result){
//     return "BADELETED!!!";
//   })
// }

// selectOne(2);
// updateName(6, 'Austin');
// deleteRow(4);