const dbConnection = (function(){

    let dbInstance;

    function createDBConnection(){
        console.log(' Create DB connection ');
        // call db connection function
        return {
            isConnected: true
        }
    }
    return {
        getConnection: function(){
            if(!dbInstance){
                console.log('-->s')
                dbInstance = createDBConnection();
            }
            return dbInstance;
        }
    }
})();

const conn1 = dbConnection.getConnection();
const conn2 = dbConnection.getConnection();
console.log(conn1);
console.log(conn2);