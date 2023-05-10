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

  async findOne(id: string) {
    return await this.postModel.findById(id);
  }

  async update(id:string, updatePostDto: UpdatePostDto) {
    return await this.postModel.findByIdAndUpdate(
      id,
      updatePostDto.post
    );
  }

  async remove(id: string) {
    return await this.postModel.findByIdAndRemove(id);
  }
}
