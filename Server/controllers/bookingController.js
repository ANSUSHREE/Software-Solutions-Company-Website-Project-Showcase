const Booking = require('../models/Booking');

exports.createBooking = async (req,res)=>{
    try{
        const {date,time,firstName,email, guests,acceptCommunications} =req.body;
        
        const booking = new Booking({
            date,
            time,
            firstName,
            email,
            guests: guests || [],
            acceptCommunications: acceptCommunications || false
        });
        
        await booking.save();
        
        res.status(201).json({
            success: true,
            data: booking,
            message: 'Booking created successfully'
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Error creating booking',
            error: error.message
        })
    }
}

// Get all bookings

exports.getBookings = async(req, res)=>{
    try{
        const bookings = await Booking.find().sort({createdAt: -1})
        res.status(200).json({
            success: true,
            data: bookings,
            message: 'Bookings fetched successfully'
        })
    } catch(error){
        res.status(500).jsson({
            success: false,
            message: 'Error fetching bookings',
            error: error.message

    })
        
    }
}
    
