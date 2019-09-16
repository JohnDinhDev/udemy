const express = require('express');
const request = require('request');
const port = 3000;

const app = express();



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});