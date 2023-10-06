import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  email: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
});

export default model<IUser>('User', userSchema);
