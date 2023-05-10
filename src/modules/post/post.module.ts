import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostMongooseModule } from 'src/schemas/post.schema';

@Module({
  imports:[PostMongooseModule],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
