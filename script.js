
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

const user = users.find((item) => {
    return item.name === 'carlos'
});



const server = createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'application/json' });
 res.end(JSON.stringify(user))
 // res.writeHead(200, { 'Content-Type': 'text/plain' });
 // res.end('Lets Code!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on okay, 127.0.0.1:3000');
});

// run with `node server.mjs`
