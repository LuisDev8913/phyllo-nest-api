import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly address: string;
  readonly phoneNumber: string;
  readonly dateOfBirth: Date;
  readonly previousDay: Date;
  readonly balance: number;
}
