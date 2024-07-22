import User from '../model/user.js'
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export const getAllUser = async (req,res) => {

    let users;

    try{
        users = await User.find();
    }catch(er){
        console.log(er);
    }

    if(!users){
        return res.status(500).json({message : "Internal server error"});
    }else{
        return res.status(200).json({users});
    }
};

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password || name.trim() === "" || email.trim() === "" || password.length < 3) {
        return res.status(422).json({ message: "Invalid data" });
    }

    try {
        const emailExists = await User.findOne({ email });
        const nameExists = await User.findOne({ name });

        if (nameExists) {
            return res.status(409).json({ message: 'Name already exists' });
        }

        if (emailExists) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        const salt = bcrypt.genSaltSync(10); 
        const hashedPassword = bcrypt.hashSync(password, salt); 

        const user = new User({ name, email, password: hashedPassword });

        await user.save();
        return res.status(201).json({ user });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal error", error: err });
    }
};

export const loginUser = async (req,res) => {
    const {email,password} = req.body;

    if(!email && email.trim() === "" &&
        !password && password.length < 7
    ){
        return res.status(422).json({message : "Invalid data"}) ;
    }

    let existsUser;

    try{
        existsUser = await User.findOne({email}); 
    }catch(er){
        return console.log(er)
    }

    if(!existsUser){
        return res.status(404).json({message : "no user found" });
    }

    const isPassCorrect = bcrypt.compareSync(password,existsUser.password);

    if(!isPassCorrect){
        return res.status(400).json({ message : "Incorrect password"});
    }else{
        return res.status(200).json({ id : existsUser._id,message : "Login Successfully"})
    }
}

export const getUserProfile = async (req,res) => {
    
    const id = req.params.id;

    let user;
    try{
        user = await User.findById(id).populate('posts');
    }catch(er){
        return console.log(er);
    }

    if(!user){
        return res.status(404).json({ message : "No user found" });
    }

    return res.status(200).json({ user });
}