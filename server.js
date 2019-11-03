//Chunk 1
const express = require('express');
const sendMail = require('./mail');
const app = express();
const log = console.log;
const PORT = 8080;

const path = require('path');


//Chunk 2
//Data Parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('html' , require('ejs').renderFile);//add render engine
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.post('/email' , (req,res) =>{
    /* console.log('Data:',req.body); */
    /* Сhunk 5 */
    const {subject , email , text} = req.body;
    sendMail(email,subject,text,function(err,data){
        if(err){
            res.status(500).json({message: 'Internal error'});
        }
        else{
            res.json({message: 'Email sent!'});
        }
    })
});

app.get('/',(req,res) => {
    res.render("index.html");
});

app.listen(PORT, () => {
    log('Server is starting on PORT', 8080);
})