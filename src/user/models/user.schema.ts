import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import mongoose, { Document, HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;

@Schema({
    toObject: {
        transform: function (doc, ret) {
          delete ret.password;
          delete ret.__v;
        }
      },
      toJSON: {
        transform: function (doc, ret) {
          delete ret.password;
          delete ret.__v;

        }
      }
})
export class User extends Document
{

    @Prop({required:true,unique:true})
    email:string;

    @Prop({default:""})
    profilePicture:string;

    @Prop({default:""})
    country:string;

    @Prop({default:""})
    location:string;

    @Prop({default:""})
    phoneNumber:string;

    
  
    @Prop({default:false})
    isDeleted:boolean;

    @Prop({default:Date.now(),required:true})
    createdAt:Date;

}

export const UserSchema = SchemaFactory.createForClass(User)