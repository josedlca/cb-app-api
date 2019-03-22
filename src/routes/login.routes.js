const express = require('express');
const router = express.Router();

const Login = require('../models/login');

router.get('/', async(req, res) => {
    const logins= await Login.find();
    res.json(logins);
});

router.get('/:id', async(req, res) => {
    const login = await Login.findById(req.params.id);
    res.json(login);
})

router.post('/', async (req, res) => {
    const {user, pass} = req.body;
    const login = new Login({user, pass});
    await login.save();
    res.json({status: 'User Saved'});
});


router.put('/:id', async(req,  res) =>{
    const {user, pass} = req.body;
    const newLogin = {user, pass}; 
    await Login.findByIdAndUpdate(req.params.id, newLogin);
    res.json({status: 'User Updated'});
})

router.delete('/:id', async(req, res) => {
    await Login.findOneAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
})

module.exports = router;