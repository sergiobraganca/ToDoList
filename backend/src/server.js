/* eslint-disable linebreak-style */
const app = require('./app');

// const dotenv = require('dotenv');
// dotenv.config();

require('dotenv').config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3333;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));