require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const connectDB       = require('./config/db');
const authRoutes      = require('./routes/authRoutes');
const tenantRoutes    = require('./routes/tenantRoutes');
const deviceRoutes    = require('./routes/deviceRoutes');
const trackRoutes     = require('./routes/trackRoutes');
const alertRoutes     = require('./routes/alertRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth',   authRoutes);
app.use('/api/tenants',tenantRoutes);
app.use('/api/devices',deviceRoutes);
app.use('/api',        trackRoutes);
app.use('/api',        alertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
