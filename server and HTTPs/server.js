const net = require('net');
const port = 4567;

const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
  console.log('New Client connected! UWU');

  connection.write('Hey hey!');

  connections.push(connection);

  connection.setEncoding('utf-8');

  connection.on('data', (messageFromClient) => {
    console.log("Debug says: " + messageFromClient);

    if (messageFromClient.startsWith('setName:')) {
      const name = messageFromClient.split(' ')[1];
      const trimmedName = name ? name.trim() : "client";
      return connection.username = trimmedName;
    }

    for (const con of connections) {
      if (con !== connection) {
        con.write(`${connection.username} says: ${messageFromClient}`);
      }
    }
  });
  connection.on('close', () => {
    for (const con of connections) {
      if (con === connection) {
        const index = connections.indexOf(con);
        connections.splice(index, 1);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});