const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const transaksiController = require('../controllers/transaksi.controller');

router.get('/user', userController.daftarUser);
router.post('/user', userController.tambahUser);
router.put('/user/:id', userController.ubahUser);
router.delete('/user/:id', userController.hapusUser);
router.get('/user/:id', userController.detailUser);

router.get('/transaksi', transaksiController.daftarTransaksi);
router.post('/transaksi', transaksiController.tambahTransaksi);
router.put('/transaksi/:id', transaksiController.ubahTransaksi);
router.delete('/transaksi/:id', transaksiController.hapusTransaksi);
router.get('/transaksi/:id', transaksiController.detailTransaksi);

module.exports = router;
