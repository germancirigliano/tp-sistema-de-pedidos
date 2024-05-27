import mongoose from 'mongoose';

const User = new mongoose.Schema({
	name: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	vehicle: String,
	role: String,
});

export default mongoose.model('User', User);
