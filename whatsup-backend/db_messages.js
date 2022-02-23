import mongoose from  'mongoose'

// data schema
const whatsupSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

export default mongoose.model('messagecontents', whatsupSchema);