import { Schema, model, Types } from "mongoose";
import bcrypt from 'bcrypt';

interface IUser {
  username: string;
  password: string;
  email: string;
  userCreated: Date;
  worlds: Array<Types.ObjectId>
  isCorrectPassword: Function;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    trim: true,
    required: true
  },

  password: {
    type: String,
    trim: true,
    required: true,
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
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
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model<IUser>("User", userSchema);

export default User;
