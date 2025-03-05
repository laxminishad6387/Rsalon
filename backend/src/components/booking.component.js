import UserBooking from '../models/booking.model.js';

// Booking a service
const BookingService = async (req, res) => {
  try {
    const { username, mobileNumber, slot, employe } = req.body; // Use req.body
    console.log(username, mobileNumber, slot, employe);

    // Check if a booking already exists for the same slot and employee
    const existingBooking = await UserBooking.findOne({ slot, employe });
    if (existingBooking) {
      return res.status(400).json({ message: 'Booking already exists for this time and employee.' });
    }

    // Create a new booking
    const newBooking = new UserBooking({ username, mobileNumber, slot, employe });
    await newBooking.save();

    return res.status(201).json({ message: 'Appointment booked successfully!', booking: newBooking });
  } catch (error) {
    console.error('An error occurred while booking the appointment:', error.message);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export default BookingService;
