const app=require('./app.js');

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}/`);
})