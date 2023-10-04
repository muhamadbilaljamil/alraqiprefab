// Import Package
const mongoose = require("mongoose");

async function connect(count = 0) {
    // MongoDB URI
    const dbURI = "mongodb://localhost:27017";
    console.log("🔁 Connecting MongoDB Atlas... try", count);
    try {
        if (count < 3) {
            await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log("🌱 MongoDB Atlas Connected");
            return true;
        } else {
            console.log("❌ Mongo Connection Error (Restart Server)");
        }
    } catch (e) {
        console.log("❌ Mongo Error:", e);
        await connect(count + 1);
        return false;
    }
}

// Exports
module.exports =  connect;
