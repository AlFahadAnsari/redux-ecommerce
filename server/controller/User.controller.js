import User from "../module/User.js";

export let Signup = async (req, res) => {
    let { fullname, email, password } = req.body;

    try {
        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        } else {
            let newUser = new User({
                fullname,
                email,
                password
            });

            await newUser.save();

            return res.status(201).json({ message: 'User created successfully' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};




// Login function
export let Login = async (req, res) => {
    let { email, password } = req.body;

    try {
        let existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            if (existingUser.password !== password) {
                return res.status(401).json({ message: 'Incorrect password' });
            } else {
                return res.status(200).json({ message: 'Login successful'});
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

