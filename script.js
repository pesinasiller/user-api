
// server.mjs
const { createServer } = require('http');
const users = [
    {
        name: "carlos",
        profilePicture: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
        country: "mexico",
        age: 38,
        gender: "male",
    },
    {
        name: "mahdia",
        profilePicture: "https://cdn2.thecatapi.com/images/FCNqMC83P.jpg",
        country: "Afghanistan",
        age: 22,
        gender: "female",
    }
];




/*
const user = users.find((item) => {
    return item.name === 'mahdia'
});
*/



const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or use a specific origin instead of "*"
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  

  const user = Math.random() > .5  ? users[0] : users[1];


  res.end(JSON.stringify(user))
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('Lets Code!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on okay, 127.0.0.1:3000');
});

// run with `node server.mjs`
