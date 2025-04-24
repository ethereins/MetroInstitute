const express = require('express');
const app = express();
const port = 3000;
const transaksiRoute = require('./route/transaksi.route');
app.use(express.json());

app.use('/transaksi', transaksiRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
