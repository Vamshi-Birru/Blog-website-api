import mongoose from 'mongoose';

const connection = async (USER,PASS) => {    
    try{
        await mongoose.connect(process.env.URL);
        console.log('Mongo DB is connected!!!')
    }catch(er){
        console.log('failed connection',er)
    }
};  

export default connection;