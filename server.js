const express = require( 'express');
const app = express();
app.use(express.static('./dist/test'));
app-get ('/', (req, res)=>{
    res.sendFile('index.html', {root:'dist/test'})
})
app. listen(process.env.PORT || 8080)