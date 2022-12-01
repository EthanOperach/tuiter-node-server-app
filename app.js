import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
  || 'mongodb+srv://operache:woflman101@cluster0.oah4ezh.mongodb.net/?retryWrites=true&w=majority'

  mongoose.connect(CONNECTION_STRING);