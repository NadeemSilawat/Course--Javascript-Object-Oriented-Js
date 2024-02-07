
// this
/*
function UserCreator(name, score){
    this.name = name;
    this.score = score;
}
UserCreator.prototype.increment = function(){
    this.score++;
};
UserCreator.prototype.login = function(){
    console.log("login");
};
const user1 = new UserCreator("Eva", 9)
user1.increment()


console.log(user1);
    */

// What if we want to organize our code inside one of our
// shared functions - perhaps by defining a new inner function


/*
function UserCreator(name, score){
    this.name = name;
    this.score = score;
   }

   UserCreator.prototype.increment = function(){
    function add1(){
    this.score++;
    }
    // const add1 = function(){this.score++;}
    add1()
   };


   UserCreator.prototype.login = function(){
    console.log("login");
   };



   const user1 = new UserCreator("Eva", 9)
   user1.increment()

   console.log(user1);
   */




//    We need to introduce arrow functions - which bind this
//    lexically

/*
function UserCreator(name, score){
 this.name = name;
 this.score = score;
}

UserCreator.prototype.increment = function(){
 const add1 = ()=>{this.score++}
 add1()
};

UserCreator.prototype.login = function(){
 console.log("login");
};


const users1 = new UserCreator("Eva", 9)
console.log(user1.increment());
 console.log(user1);
*/



// The class ‘syntactic sugar’

class userCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }


    increment() {
        this.score++;
    }
    login() {
        console.log(`${this.name} has logged in.`);
    }
}
const users = new userCreator("Eva", 2);

console.log(users.increment());
console.log(users);


