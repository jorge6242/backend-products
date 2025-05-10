const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/product.routes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/productos', productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
