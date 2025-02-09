const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Verbonden met de database');
    } catch (error) {
        console.error('❌ Fout bij het verbinden met de database:', error);
        throw new Error('Databaseverbinding mislukt');
    }
};

module.exports = { dbConnection };
