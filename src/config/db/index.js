// const mongoose = require('mongoose');
import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/We17308', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!'); 
        
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

export default connect;