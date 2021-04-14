import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // categories: {
    //     type: [Object],
    //     default: [
    //         {id: 0, name: "Salary"}, 
    //         {id: 1, name: "Business"}, 
    //         {id: 2, name: "Food"}, 
    //         {id: 3, name: "Transportation"},
    //         {id: 4, name: "Housing/Rent"},
    //         {id: 5, name: "Utilities"},
    //         {id: 6, name: "Home Services"},
    //         {id: 7, name: "Household Items"},
    //         {id: 8, name: "Medical/Health"},
    //         {id: 9, name: "Insurance"},
    //         {id: 10, name: "Kids"},
    //         {id: 11, name: "Pets"},
    //         {id: 12, name: "Clothing"},
    //         {id: 13, name: "Personal Care"},
    //         {id: 14, name: "Recreation/Fun"},
    //         {id: 15, name: "Personal Development"},
    //         {id: 16, name: "Gifts"},
    //         {id: 17, name: "Charity"},
    //         {id: 18, name: "Travel"},
    //         {id: 19, name: "Saving & Investing & Debt Payments"},
    //     ]
    // }
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;