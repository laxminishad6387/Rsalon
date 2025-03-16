import Feedback from "../models/feedback.model.js";

const userFeedback = async (req, res) => {
    try {
        const { username, message } = req.body;

        console.log('Received Feedback:', req.body); // Log full body for debugging

        if (!username || !message) {
            return res.status(400).json({ message: 'Please provide both username and message.' });
        }

        const newFeedback = new Feedback({ username, message });
        await newFeedback.save();

        res.status(201).json({ message: 'Feedback sent successfully!' });
    } catch (error) {
        console.error('Error saving feedback:', error.message);
        res.status(500).json({ error: 'An error occurred while saving feedback.' });
    }
};

export default userFeedback;
