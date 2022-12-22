const express = require('express');
const HelloController = require("../controllers/Hellocontroller");
const StudentsController = require("../controllers/StudentsController");

const router = express.Router();


//This is my first get routing
router.get("/hello-get", HelloController.HelloGet)
router.post("/hello-post", HelloController.HelloPost)


//Mongoose
router.post("/insertStudent", StudentsController.insertStudent)
router.get("/ReadStudent", StudentsController.ReadStudent)

module.exports = router;
