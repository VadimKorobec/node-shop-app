const express = require("express");

const app = express();
const port = 8000;

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(express.json());

app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


