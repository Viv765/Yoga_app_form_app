const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://vivekgawai:Mkc%4012345678@cluster0.09s2sjc.mongodb.net/VIVEK_YOGA_FORM', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a User schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    batch: String,
    paymentStatus: String,
});
//user create krenge
const User = mongoose.model('User', userSchema);

// We will create api for handling form submission
app.post('/api/enroll', async (req, res) => {
    const userData = req.body;

    // validation krenge
    if (!userData.name || !userData.age || !userData.email || !userData.batch) {
        return res.status(400).json({ error: 'Incomplete data' });
    }
    console.log(userData.batch);
    if (userData.batch !== "6-7" && userData.batch !== "7-8" && userData.batch !== "8-9" && userData.batch !== "17-18") {

        return res.status(400).json({ error: 'Invalid Batch' });
    }

    // Validate age
    if (userData.age < 18 || userData.age > 65) {
        return res.status(400).json({ error: 'Invalid age' });
    }

    // We Dont need to implement this function
    const paymentResponse = CompletePayment(userData);

    userData.paymentStatus = paymentResponse.success ? 'Paid' : 'Unpaid';

    // we will store the data in MongoDB
    try {
        const user = new User(userData);
        await user.save();
        return res.json({ success: true, message: 'Enrollment successful', paymentResponse });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// We dont need to implement this function
function CompletePayment(user) {
    return { success: true, message: 'Payment successful' };
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
