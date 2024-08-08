"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
const Booking_1 = require("./Booking");
class Hotel {
    constructor() {
        this.rooms = [];
        this.bookings = [];
    }
    addroom(room) {
        this.rooms.push(room);
    }
    bookRoom(guest, roomNumber, days) {
        const room = this.rooms.find(r => r.roomNumber === roomNumber && !r.isBooked);
        if (room) {
            room.isBooked = true;
            const booking = new Booking_1.Booking(guest, room, days);
            this.bookings.push(booking);
            console.log(`Room ${roomNumber} booked successfully for ${guest.name}`);
        }
        else {
            console.log(`Room ${roomNumber} is not available`);
        }
    }
    listBookings() {
        this.bookings.forEach(booking => {
            console.log(`Guest: ${booking.guest.name},Room: ${booking.room.roomNumber},Days: ${booking.days}`);
        });
    }
}
exports.Hotel = Hotel;
