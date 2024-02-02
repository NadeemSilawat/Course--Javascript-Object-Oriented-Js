            //Using the prototype chain
        /*
        const functionStore = {
        increment: function(){this.score++;},
        login: function(){console.log("You're loggedin")}
        };

        const user1 = {
        name: "Phil",
        score: 4
        }


        user1.name // name is a property of user1 object
        user1.increment // Error! increment is not!
        */

        // Link user1 and functionStore so the interpreter, on not finding .increment,
        // makes sure to check up in functionStore where it would find it


            
        
            //  Make the link with Object.create() technique
        
            /*
            const user1 = Object.create(functionStore)
            user1 // {}
            user1.increment // function....
            */


                // Solution 2 in full

            function userCreator (name, score) {
            const newUser = Object.create(userFunctionStore);
            newUser.name = name;
            newUser.score = score;
            return newUser;
            };
            const userFunctionStore = {
            increment: function(){this.score++;},
            login: function(){console.log("You're loggedin");}
            };
            const user1 = userCreator("Phil", 4);
            const user2 = userCreator("Julia", 5);
            user1.increment();
            
