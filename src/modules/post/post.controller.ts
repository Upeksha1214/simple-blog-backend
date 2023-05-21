import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto.post);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':userName')
  update(@Param('userName') user: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(user, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
