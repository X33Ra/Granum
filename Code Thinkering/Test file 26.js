// Add a callback parameter to the connect function
const connect = function(messageCallback) {
  // ...

  // Handle server messages
  conn.on('data', (data) => {
    console.log('Server Says:', data);
    
    // Check if the client has died
    if (data === 'You died') {
      console.log('You lose');
      conn.end();
    } else {
      // Pass the message to the callback function
      messageCallback(data);
    }
  });

  // ...
};
