import {ObjectId} from 'mongoose';
import { ViewGroup } from '../enums/view.enum';


export interface View {
  _id:ObjectId;
  viewGroup: ViewGroup;
  memberId: ObjectId;
  ViewRefId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}


export interface ViewInput{
  memberId: ObjectId;
  viewRefId: ObjectId;
  viewGroup: ViewGroup;
}