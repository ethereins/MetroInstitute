const { Transaksi } = require('../models');

const daftarTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll();

    res.status(200).json({
      message: 'Daftar transaksi',
      data: transaksi
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan',
      error: error.message
    });
  }
};

const tambahTransaksi = async (req, res) => {
  try {
    const { kategori, jumlah, deskripsi, tanggal, user_id } = req.body;

    if (kategori !== 'pemasukan' && kategori !== 'pengeluaran') {
      return res.status(400).json({
        message: 'Kategori hanya bisa "pemasukan" atau "pengeluaran"'
      });
    }

    const transaksi = await Transaksi.create({
      kategori,
      jumlah,
      deskripsi,
      tanggal,
      user_id
    });

    res.status(201).json({
      message: 'Transaksi berhasil ditambahkan',
      data: transaksi
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan',
      error: error.message
    });
  }
};

const ubahTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const { kategori, jumlah, deskripsi, tanggal, user_id } = req.body;

    if (kategori !== 'pemasukan' && kategori !== 'pengeluaran') {
      return res.status(400).json({
        message: 'Kategori hanya bisa "pemasukan" atau "pengeluaran"'
      });
    }

    const transaksi = await Transaksi.findByPk(id);
    if (!transaksi) {
      return res.status(404).json({
        message: 'Transaksi tidak ditemukan'
      });
    }

    await transaksi.update({
      kategori,
      jumlah,
      deskripsi,
      tanggal,
      user_id
    });

    res.status(200).json({
      message: 'Transaksi berhasil diubah',
      data: transaksi
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan',
      error: error.message
    });
  }
};

const hapusTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await Transaksi.findByPk(id);
    if (!transaksi) {
      return res.status(404).json({
        message: 'Transaksi tidak ditemukan'
      });
    }

    await transaksi.destroy();
    res.status(200).json({
      message: 'Transaksi berhasil dihapus'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan',
      error: error.message
    });
  }
};

const detailTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await Transaksi.findByPk(id);

    if (!transaksi) {
      return res.status(404).json({
        message: 'Transaksi tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Detail transaksi',
      data: transaksi
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan',
      error: error.message
    });
  }
};

module.exports = {
  daftarTransaksi,
  tambahTransaksi,
  ubahTransaksi,
  hapusTransaksi,
  detailTransaksi
};
