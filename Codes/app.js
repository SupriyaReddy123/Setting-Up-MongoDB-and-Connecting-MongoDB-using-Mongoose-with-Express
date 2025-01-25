const express=require('express');
const bodyParser=require('body-parser');
const User=require('./userModel');
const app=express();
const PORT=3000;
app.use(bodyParser.json());
app.get('/api/test', (req, res)=>{
    res.send('API is working!');
});
app.listen(PORT, ()=>{
    console.log('Server running on http://localhost:${PORT}');
});


app.get('/api/users', async (req, res)=>{
  try{
      const users=await User.find();
      res.json(users);
  }
  catch(error){
      res.status(500).send(error.message);
  }
});
app.post('/api/users', async (req, res)=>{
  try{
      const newUser=new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
  }
  catch(error){
      res.status(400).send(error.message);
  }
});
app.get('/api/users/:id', async (req, res)=>{
  try{
      const user=await User.findById(req.params.id);
      if (!user) return res.status(404).send('User not found');
      res.json(user);
  }
  catch(error) {
      res.status(500).send(error.message);
  }
});
app.put('/api/users/:id', async (req, res)=>{
  try{
      const user=await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
      if(!user) return res.status(404).send('User not found');
      res.json(user);
  }
  catch(error) {
      res.status(400).send(error.message);
  }
});
app.delete('/api/users/:id', async (req, res)=>{
  try {
      const user=await User.findByIdAndDelete(req.params.id);
      if(!user)
        return res.status(404).send('User not found');
      res.send('User deleted successfully');
  }
  catch(error) {
      res.status(500).send(error.message);
  }
});