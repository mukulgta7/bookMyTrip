var Sequelize = require('sequelize');

var db = new Sequelize("userdb","root","63645678",{
    dialect:'mysql',
    host: 'localhost',

});

var test = db.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();

    const Users = db.define('users', {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    db.sync().then(() => {
        console.log("Database is ready")
    });

    module.exports = {
        db,
        Users
    };
