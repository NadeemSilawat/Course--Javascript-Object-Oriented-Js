            //Object Creation

        // Objects - store functions with their associated data!

    const user1 ={
        name: "John",
        score: 4,
        increment: function(){
            user1.score++;
        }
    };


    console.log(user1.increment());
    console.log(user1);


        //Object Dot Notation

    const user2 = {}

    user2.name = "Fill";
    user2.score = 3;
    user2.increment = function(){
        this.score++;
    }
    
    user2.increment()
    console.log(user2);


        //   Creating user3 using Object.create

    const user3 = Object.create(null);
    user3.name = "Eva";
    user3.score = 9;
    user3.increment = function() {
    user3.score++;
    };

    console.log(user3 );



            // Solution 1. Generate objects using a function

    function userCreator(name, score) {
        const newUser = {};
        newUser.name = name;
        newUser.score = score;
        newUser.increment = function() {
        newUser.score++;
        };
        return newUser;
       };
       const output = userCreator("Phil", 4);
       const newoutput = userCreator("Julia", 5);
       output.increment()

