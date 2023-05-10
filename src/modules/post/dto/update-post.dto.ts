import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import IPost from 'src/interfaces/post.interface';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    post: IPost;
}