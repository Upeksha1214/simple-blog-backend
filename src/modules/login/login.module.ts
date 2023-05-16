import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SignupModule } from '../signup/signup.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SignUpSchema } from 'src/schemas/signup_form.schema';
import { SignupService } from '../signup/signup.service';


@Module({
  controllers: [LoginController],
  providers: [SignupService,LoginService],
  imports:[MongooseModule.forFeature([
    {
      name:'SignUp',
      schema:SignUpSchema
    }

  ]),SignupModule ]
})
export class LoginModule {}
