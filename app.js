const express = require('express')
const app = express();
const port = 3000
const game = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',function(req,res){

    res.send('Hello World!');
})
app.use('/api/game', game);

app.listen(3000,function(){

    console.log(`server has started at port ${port}`);
})