const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "mysql-service",
  user: "root",
  password: "root",
  database: "testdb"
});

db.connect(err => {
  if (err) {
    console.log("MySQL connection failed");
  } else {
    console.log("MySQL connected");
  }
});

// API route
app.get("/", (req, res) => {
  db.query("SELECT 'Hello from MySQL' AS message", (err, result) => {
    if (err) {
      res.send("DB error");
    } else {
      res.send(result[0].message);
    }
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
