import User from "../models/user.model.js";
// import bcrypt from "bcryptjs";
import bcrypt from "bcrypt";
// const bcrypt = require('bcrypt');

export const signup = async (req, res) => {

    const { username, email, password } = req.body;
    // const hashedPassword = bcrypt.hashSync(password, 10); 
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email, 
        password: hashedPassword,
       });
  
      // Save the user to the database
      await newUser.save();
    res.status(201).json({ message: "User created successfully" });

}; 