

// 1       Subclassing with Factory Functions

        function userCreator(name ,score){
            const newUser = Object.create(userFunctions);
            newUser.name  = name;
            newUser.score = score;
            return newUser ;
        }

        userFunctions = {
            sayName: function(){
                console.log("Im"+ this.name)
            },
            increment: function(){
                this.score++ ;
            }
        }

        const user1 = userCreator("Phill",3);
        user1.sayName();


             //         ||
             //        \||/
             //         \/                    
                    

             function paidUserCreator(paidName, paidScore, accountBalance){
                const newPaidUser = userCreator(paidName , paidScore);
                Object.setPrototypeOf(newPaidUser, paidUserFunction);
                newPaidUser.accountBalance = accountBalance;
                return newPaidUser;
              }
              
              const paidUserFunction = {
                increaseBalance: function(){
                  this.accountBalance++
                }
              };
              
                Object.setPrototypeOf(paidUserFunctions,userFunctions)
                const paidUser1 = paidUserCreator("Alie",2,34);  
                paidUser1.increaseBalance();
              paidUser1.sayName();

              


