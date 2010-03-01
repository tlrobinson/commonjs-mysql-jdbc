var jdbc = require("jdbc");

exports.open = function(host, port, database, user, password) {
    return jdbc.connect("jdbc:mysql://"+host+":"+port+"/"+database+"?user="+user+"&password="+password);
}
