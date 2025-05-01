const { User } = require('../models');

const daftarUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(200).json({
      message: 'Berhasil mendapatkan daftar user',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan daftar user',
      error: error.message
    });
    console.log(error);
  }
};

const tambahUser = async (req, res) => {
  try {
    const { nama, email, password } = req.body;

    const userExist = await User.findOne({
      where: {
        email: email
      }
    });

    if (userExist) {
      return res.status(400).json({
        message: 'Email sudah terdaftar, silakan gunakan email lain.'
      });
    }

    const user = await User.create({
      nama,
      email,
      password
    });

    res.status(201).json({
      message: 'Berhasil menambahkan user',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menambahkan user',
      error: error.message
    });
    console.log(error);
  }
};

const ubahUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'User tidak ditemukan'
      });
    }

    await user.update(req.body);

    res.status(200).json({
      message: 'Berhasil mengubah user',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mengubah user',
      error: error.message
    });
    console.log(error);
  }
};

const hapusUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'User tidak ditemukan'
      });
    }

    await user.destroy();

    res.status(200).json({
      message: 'Berhasil menghapus user'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal menghapus user',
      error: error.message
    });
    console.log(error);
  }
};

const detailUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'User tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Berhasil mendapatkan detail user',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Gagal mendapatkan detail user',
      error: error.message
    });
    console.log(error);
  }
};

module.exports = {
  daftarUser,
  tambahUser,
  ubahUser,
  hapusUser,
  detailUser
};
