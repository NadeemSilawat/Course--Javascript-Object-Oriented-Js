


                // Object default __proto__

        const obj = {
            num:3,
            score:2
        }

        obj.num
        obj.hasOwnProperty("score");

        Object.prototype 
        
        
            // Arrays and functions are also objects so they get access to
            // all the functions in Object.prototype but also more goodies

        function multiplyBy2(num){
            return num * 2;
        }

        multiplyBy2.toString()
        Function.prototype
        multiplyBy2.hasOwnProperty("score")
        Function.prototype.__proto__


        
