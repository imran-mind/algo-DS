/* 
 In Singlton design pattern only one object is created and the same object
 is reused by other function call
*/

let obj = (function(){
    let objInstance;
    function create(){
        let _isRunning = false;

        return {
            start: function(){
                _isRunning = true;
            },
            stop: function(){
                _isRunning = false;
            },
            getStatus: function(){
                return _isRunning;
            }
        }
    }

    return {
        getInstance: function(){
            if(!objInstance){
                console.log('init object is creating')
                objInstance = create();
            }
            console.log('object is resuing ');
            return objInstance;
        }
    }
})();

console.log(obj)
let obj1 = obj.getInstance();
let obj2 = obj.getInstance();