import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import IPost from "src/interfaces/post.interface";

export type PostDocument = HydratedDocument<Post>

@Schema({ collection: 'blog-post'})
export class Post implements IPost{

    @Prop({required:true})
    authorName: string;

    @Prop({required:true})
    postTitle: string;

    @Prop({required:true})
    postBody: string;

    @Prop({required:true})
    createdDate: Date;

}

export const PostSchema = SchemaFactory.createForClass(Post);

export const PostMongooseModule = MongooseModule.forFeature([
    { name:Post.name,schema:PostSchema}
])
