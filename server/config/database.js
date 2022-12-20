// const mysql = require('mysql');
// const { default: Answer } = require('../../../client/src/Components/Answer/Answer');

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.MYSQL_DB,
//     connectionLimit: 10
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

let registration = `CREATE TABLE if not exists registration(
    user_id int auto_increment,
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    PRIMARY KEY (user_id),
    UNIQUE KEY (user_name)
    )`;
let profile = `CREATE TABLE if not exists profile(
    user_profile_id int auto_increment,
    user_id int not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,        
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
let question = `CREATE TABLE if not exists question (
    question_id int auto_increment,
    question varchar(225) not null,
    question_description varchar(225),
    question_code_block varchar(225),
    tags varchar(225),
    post_id varchar(225) not null,
    user_id int not null,
    PRIMARY KeyboardEvent(question_id),
    UNIQUE KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
)`;
let answer = `CREATE TABLE if not exists Answer(
        answer_id int auto_increment,
        answer varchar (225) not null,
        answer_code_block varchar(225),
        PRIMARY KEY (answer_id),
        FOREIGN KEY(user_id) REFERENCES registration(user-id),
        FOREIGN KEY(question_id)REFERENCES question(question_id),
    )`;
pool.query(registration, (err, results) => {
    if (err) throw err;
    console.log('registration table created');
})
pool.query(profile, (err, results) => {
    if (err) throw err;
    console.log('profile table created');
})

module.exports = pool;