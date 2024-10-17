const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: [true, 'Service name is required'],
        trim: true
    },
    description: {
        type: String,
        default: 'No description provided'
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: 0
    },
    category: {
        type: String,
        default: 'General'
    },
    availability: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Create a model based on the schema
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
