import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import ISignupForm from "src/interfaces/user_signup_form.interface";

export type SignUpDocument = HydratedDocument<SignUp>

@Schema({ collection: 'blog-signUp' })
export class SignUp implements ISignupForm{

    @Prop({ required:true })
    fullName: string;

    @Prop({ required:true })
    username: string;

    @Prop({ required:true })
    phoneNumber: string;

    @Prop({ required:true })
    email: string;

    @Prop({ required:true })
    password: string;

}

export const SignUpSchema =SchemaFactory.createForClass(SignUp);

export const SignUpMongooseModule = MongooseModule.forFeature([
    { name:SignUp.name,schema:SignUpSchema}
 ]);