const express = require('express');

const app = express();

const connectoPort = () => {
    app.listen(5000 , () =>{
        console.log("server started");
    })
}

module.exports = connectoPort
