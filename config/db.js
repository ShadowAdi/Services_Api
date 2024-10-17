const mongoose = require("mongoose")
const PORT = process.env.PORT || '5000'

const Connect = async (app) => {
    try {
        await mongoose.connect(process.env.MOBGODB_URI);

        console.log("MongoDB Connected");

        app.listen(PORT, () => {
            console.log(`Server Started at http://localhost:${PORT}/api/v1`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message || error);
        process.exit(1);
    }
};


module.exports = Connect