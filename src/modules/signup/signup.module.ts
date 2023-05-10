import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SignUpSchema } from 'src/schemas/signup_form.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:'SignUp',
        schema:SignUpSchema
      }

    ])
  ],
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}
