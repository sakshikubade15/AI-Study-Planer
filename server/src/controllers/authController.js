
export const registerUser = async (req, res) => {
  try {

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// LOGIN USER
export const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};