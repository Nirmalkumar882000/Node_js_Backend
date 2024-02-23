const User = require("../models/User");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(401).send({ message: "All fields are required" });
    }
    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Find all user in the database
const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Find single users in database

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(401).send({ message: "All fields are required" });
    }
    const user = await User.update(
      { username: username, email: email, password: password },
      { where: { id } }
    );
    return res.status(200).send({ message: "User Upadated Successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// Delete User

const deletUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }

    return res.status(200).send({ message: "User Deleted Successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { createUser, getUser, getSingleUser, updateUser,deletUser };
