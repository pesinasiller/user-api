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

const user = users.find((user) => { 
    return user.name === 'carlos'
});

console.log({user});
