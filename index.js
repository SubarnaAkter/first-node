const express=require('express');
const app=express();
const cors=require('cors' );
app.use(cors());
app.use(express.json());
// const port =process.env.PORT || 3000;
const port=5000; 

app.get('/',(req,res)=>{
    res.send('Hello from node 154554')
});
//----------------------------------------------
const users=[
    {id:0,name:'fahim',email:'fahim@hgmail.com'},
    {id:1,name:'Abir',email:'Abir@hgmail.com'},
    {id:2,name:'Subarna',email:'Subarnam@hgmail.com'},
    {id:3,name:'Asif',email:'Asif@hgmail.com'},
    {id:4,name:'Sorna',email:'Sorna@hgmail.com'},
    {id:5,name:'Any',email:'Any@hgmail.com'},
   
];

app.get('/users',(req,res)=>{

    const search=req.query.search;

    if(search){
       const searchResult=users.filter(user=>user.name.toLowerCase().includes(search));

       res.send(searchResult)
    }
   else{
    res.send(users);
   }
})
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;

    users.push(newUser);

  
    console.log('inside post',req.body);
    res.json(newUser)
    // res.json(users)
})

app.get('/users/:id',(req,res)=>{
    const index =req.params.id;

    const user=users[index];
    res.send(user)
})


app.listen(port,()=>{
    console.log(`listening at : ${port}`)
}
)