// Import Package
import mongoose from "mongoose";

// Connecting to Database
import {MONGODB_URI} from "../util/secrets";

async function connect(count=0) {
    // MongoDB URI
    const dbURI = MONGODB_URI;
    console.log("🔁 Connecting MongoDB Atlas... try",count);
    try {
        if(count<3){
            await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true});
            console.log("🌱 MongoDB Atlas Connected");
            return true;
        }else{
            console.log("❌ Mongo Connection Error (Restart Server)");
        }
    } catch (e) {
        console.log("❌ Mongo Error:",e);
        await connect(count+1);
        return false;
    }
}

// Exports
export default connect;
