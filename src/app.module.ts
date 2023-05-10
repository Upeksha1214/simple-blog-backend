import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SignupModule } from './modules/signup/signup.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    CacheModule.register(),
    SignupModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
