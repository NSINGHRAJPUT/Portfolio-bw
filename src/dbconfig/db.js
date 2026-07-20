const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || process.env.MOONGOOSE_URI;
    if (!uri) {
      throw new Error("Missing MONGODB_URI environment variable.");
    }
    await mongoose.connect(uri);
  } catch (error) {
    console.log("mongoose connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
