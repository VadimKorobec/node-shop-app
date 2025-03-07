const express = require("express");

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const port = 8000;
