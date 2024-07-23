const { User, validate } = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

    
    let user = await User.findOne({ email });
    if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

    user = new User({
      username,
      email,
      password,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Use an environment variable
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        // res.json({ token });
        res.status(201).send({ message: "User created successfully", token });
      }
    );
  } catch (err) {
    console.error(err.message);
    // res.status(500).send('Server error');
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ msg: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    // const token = user.generateAuthToken();

    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Use an environment variable
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({user, token });
        res.status(200).send({ 
          user, 
          data: token, 
          message: "User Logged in successfully" 
        });
      }
    );    
		
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
