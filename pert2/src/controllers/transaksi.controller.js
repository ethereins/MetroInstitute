const transaksi = [
    {
      id: 1,
      kategori: 'Pemasukan',
      jumlah: 750000,
      deskripsi: 'Beasiswa',
      tanggal: '2025-04-05'
    },
    {
      id: 2,
      kategori: 'Pengeluaran',
      jumlah: 150000,
      deskripsi: 'Belanja bahan pokok',
      tanggal: '2025-04-02'
    },
    {
        id: 3,
        kategori: 'Pemasukan',
        jumlah: 500000,
        deskripsi: 'Gaji',
        tanggal: '2025-04-28'
    },
  ];
  
  const getAllTransaksi = (req, res) => {
    res.json(transaksi);
  };

  const getTransaksiById = (req, res) => {
    const id = req.params.id;
    const transaksiById = transaksi.find((transaksi) => transaksi.id === parseInt(id));
    
    if (transaksiById) {
      res.json(transaksiById);
    } else {
      res.status(404).json({ message: 'Transaksi tidak ditemukan' });
    }
  };

  const createTransaksi = (req, res) => {
    const { kategori, jumlah, deskripsi, tanggal } = req.body;
    const newTransaksi = {
      id: transaksi.length + 1,
      kategori,
      jumlah,
      deskripsi,
      tanggal
    };
    transaksi.push(newTransaksi);
    res.status(201).json(newTransaksi);
  };
  
  const updateTransaksi = (req, res) => {
    const id = parseInt(req.params.id);
    const { kategori, jumlah, deskripsi, tanggal } = req.body;
    const transaksiIndex = transaksi.findIndex((t) => t.id === id);
  
    if (transaksiIndex !== -1) {
      transaksi[transaksiIndex] = {
        ...transaksi[transaksiIndex],
        kategori,
        jumlah,
        deskripsi,
        tanggal
      };
      res.json({
        status: 200,
        message: 'Transaksi berhasil diperbarui',
        data: transaksi[transaksiIndex]
      });
    } else {
      res.status(404).json({ message: 'Transaksi tidak ditemukan' });
    }
  };
  
  const deleteTransaksi = (req, res) => {
    const id = parseInt(req.params.id);
    const transaksiIndex = transaksi.findIndex((t) => t.id === id);
  
    if (transaksiIndex !== -1) {
      const deletedTransaksi = transaksi[transaksiIndex];
      transaksi.splice(transaksiIndex, 1);
      res.json({
        status: 200,
        message: 'Transaksi berhasil dihapus',
        data: deletedTransaksi
      });
    } else {
      res.status(404).json({ message: 'Transaksi tidak ditemukan' });
    }
  };
  
  module.exports = {
    getAllTransaksi,
    getTransaksiById,
    createTransaksi,
    updateTransaksi,
    deleteTransaksi
  };
  