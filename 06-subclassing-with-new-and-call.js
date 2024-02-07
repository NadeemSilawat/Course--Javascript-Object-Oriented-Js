

// Subclassing with new and call


// Interlude - We have another way of running a function that
// allow us to control the assignment of this


const obj = {
    num: 3,
    increment: function () { this.num++; }
};
const otherObj = {
    num: 10
};
obj.increment(); // obj.num now 4
obj.increment.call(otherObj); // otherObj.num now 11
// obj.increment.apply(otherObj);





//Subclassing in Solution 3
// constructor(Pseudoclassical )approach



function userCreator(name, score) {
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

userFunctions = {
    sayName: function () {
        console.log("Im" + this.name)
    },
    increment: function () {
        this.score++;
    }
}

const user1 = userCreator("Phill", 3);
user1.sayName();




//         ||
//        \||/
//         \/



function paidUserCreator(paidName, paidScore, accountBalance) {
    userCreator(this, paidName, paidScore);
    //userCreator.apply(this,[newPaidUser, paidUserFunction]);
    this.accountBalance = accountBalance;

}

paidUserFunction.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.increaseBalance = function () {
    this.accountBalance++
};



const paidUser1 = new paidUserCreator("Alie", 2, 34);
paidUser1.increaseBalance();
paidUser1.sayName();


