import { Schema, model, Types } from "mongoose";
import bcrypt from 'bcrypt';
import { User } from "../__generated__/resolvers-types";


const userSchema = new Schema<User>({
  username: {
    type: String,
    trim: true,
    required: true
  },

  password: {
    type: String,
    trim: true,
    required: true,
    validate: [({ length }: { length: number }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: String,
    default: Date.now.toString()
  },
  worlds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'World'
    }
  ]
});

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = model<User>("User", userSchema);

export default User;
