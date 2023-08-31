import { Schema, model, models } from 'mongoose';

const BuyerSchema = new Schema({
    email: {
        type: 'string',
        unique: [true, 'Email already in Exists'],
        required: [true, 'Email is required'],
    },
    username: {
        type: 'string',
        required: [true, 'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    password: {
        type: 'string',
        required: [true, 'Password is required'],
    },
    image: {
        type: 'string',
    }
})

const  Buyer = models.Buyer || model("User", BuyerSchema);

export default Buyer;