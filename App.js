const express=require('express');

const cors=require('cors');
const bodyParser=require('body-parser')
const app=express();
const routes=require('./routers');
app.use(bodyParser.json());
app.use(cors());

app.use('/',routes);
app.listen(8000,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Server started on port "+process.env.PORT);
        
    }
})
app.use((error,req,res,next)=>{
    req.json({
        success:false,
        error,
    })
});

