import mongoose from 'mongoose';

const Salary = new mongoose.Schema({
	salary: { type: Number, required: true },
	date: { type: Date, required: true },

	worked_hours: { type: Number, required: true },
});

export default mongoose.model('Salary', Salary);
