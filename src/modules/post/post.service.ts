import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { Model } from 'mongoose';
import IPost from 'src/interfaces/post.interface';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private postModel:Model<PostDocument>
  ){}


  async create(post : IPost) {
    return await new this.postModel(post).save();
  }

  async findAll() {
    return await this.postModel.find();
  }

  async findOne(authorName:string) {
    return await this.postModel.findOne({authorName});
  }

  async update(id:string, updatePostDto: UpdatePostDto) {
    const data= await this.postModel.findOne(
      {authorName:id},
    );
    return this.postModel.findByIdAndUpdate(data._id,updatePostDto.post)
  }

  async remove(id: string) {
    const data= await this.postModel.findOne(
      {authorName:id},
    );
    return await this.postModel.findByIdAndRemove(data._id);
  }
}
