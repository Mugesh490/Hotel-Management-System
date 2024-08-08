"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hotel_1 = require("./Hotel");
const room_1 = require("./room");
const guest_1 = require("./guest");
const hotel = new Hotel_1.Hotel();
const room101 = new room_1.Room(101);
const room102 = new room_1.Room(102);
hotel.addroom(room101);
hotel.addroom(room102);
const guest1 = new guest_1.Guest('John Doe', 1);
const guest2 = new guest_1.Guest('Mugesh', 2);
const guest3 = new guest_1.Guest('Saravanan', 3);
hotel.bookRoom(guest1, 101, 3);
hotel.bookRoom(guest2, 102, 2);
hotel.bookRoom(guest3, 101, 3);
hotel.listBookings();
