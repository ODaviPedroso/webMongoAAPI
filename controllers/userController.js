const User = require('../models/user');
const userService = require('../services/userService');


exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar os usuários.' });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar o usuário.' });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao excluir o usuário.' });
  }
};

exports.login = async (req, res) => {
  const { author_user, author_pwd } = req.body;

  try {
    const loginResult = await userService.login(author_user, author_pwd);

    if (loginResult) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao efetuar o login.' });
  }
};
