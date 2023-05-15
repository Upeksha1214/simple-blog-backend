import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type SignUpDocument = HydratedDocument<SignUp>

@Schema({ collection: 'blog-signUp' })
export class SignUp {

    @Prop({})
    fullName: string;

    @Prop({ required:true })
    username: string;

    @Prop({})
    phoneNumber: string;

    @Prop({})
    email: string;

    @Prop({})
    password: string;

}

export const SignUpSchema =SchemaFactory.createForClass(SignUp);

export const SignUpMongooseModule = MongooseModule.forFeature([
    { name:SignUp.name,schema:SignUpSchema}
 ]);