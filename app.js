// Data type

// Primitive
// Reference
//  1. object
//  2. array
//  3. function


let x = 12, y = 4, z = 3

let result = x + y + z

console.log(result);



// incorrect way
let rang1 = "red"
let rang2 = "green"
let rang3 = "blue"

console.log(rang1);

// array

// correct way
let ranglar = ["red", "green", "blue"]

console.log(ranglar);
console.log( ranglar[1] );

let mixArray = ["salom", 12, 4, true, null, ""]

console.log( mixArray[1] + 3 );

// array.lenght --> arraydagi malumotlarni nechtaligini ko'rsatadi
console.log( mixArray.length );


// object

// incorrect way
let name = "John"
let username = "john-18"
let password = "1234asdfg"

console.log(username);


let name2 = "Mike"
let username2 = "mike-18"
let password2 = "12asdasdassdfg"


// correct way
let user = {
    name: "John",
    username: "john-18",
    password: "1234asdfg"
}



let telegramUser = {
    fname: "John",
    lname: "Doe",
    tel: "+998913430668",
    bio: "lorem ipsum dolor",
    password: 12345678,
    admin: true
}


console.log(user);
console.log( user.password );
console.log( telegramUser.admin);




let lorem = [ 12, "salom", true, null, {name:"john"}, [45, 6]]



console.log( lorem[5][0] );

console.log( lorem[4] .name );



// Instagram Data


let instaUsers = [
    {
        name: "mike",
        password: 13245678,
        followers: [
            {
                name: "Angela",
                password: "********",
            },
            {
                name: "john",
                password: 12345678
            }
        ],
        following: [
            {
                name: "Ronaldo",
                password: "********"
            },
            {
                name: "Messi",
                password: "********"
            }
        ],
        post: ["https://","https://","https://","https://",]


    }
]
                
console.log( instaUsers[0] .following[1] .name );



let users = [
    {
        name: "John",
        age: 23,
        isMarried: false
    },
    {
        name: "Mike",
        age: 43,
        isMarried: true,
        hobbies: ["football", "basketball",{
            type: "Sport",
            speed: [{
                car: 200,
                bike: 20,
                motobike: {
                    color: "red",
                    price: {
                        finalPrice: "500 $",
                        oldPrice: "400 $"
                    },
                }
            }]
        }, "swimming"]
    },
    {
        name: "Leo",
        age: 12,
        isMarried: false,
        hobbies: ["football", "basketball", "swimming"]
    },
    {
        name: "Neymar",
        age: 50,
        isMarried: true,
        hobbies: ["football", "basketball", "swimming", {
            type: "sport",
            speed: [230, 180, 500]
        }]

    },
]

















