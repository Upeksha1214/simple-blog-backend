import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SignupModule } from './modules/signup/signup.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    CacheModule.register(),
    SignupModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
