const express =require("express")
const app =express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
if(password=="password"){
res.send("login succesful");
}else{
    res.send("password is incorrect")
} 
})

app.post("/register",(req,res)=>{
    res.send("Register");
})

app.post("/signup",(req,res)=>{
    console.log(req.body);
    res.send("sign up");
})

app.listen(5000,()=>{
    console.log("server listening at port 5000");
});

