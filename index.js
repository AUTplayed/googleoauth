var google = require("./google.js");

google.getSavedClient(function (client) {
    //Example
    //https://www.googleapis.com/auth/userinfo.email scope required
    var plus = client.plus('v1');
    plus.people.get({userId:'me'},function(err,res){
        console.log("email: ",res.emails[0].value);
        console.log("name:",res.displayName);
    });
});