import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { SignupService } from '../signup/signup.service';
const bcrypt = require('bcrypt');

@Injectable()
export class LoginService {

  constructor(private signService:SignupService) {}

  async getByUsername(username:string ,password:string) {
    const user = await this.signService.getByUsername(username);
    console.log(user)
    const result = await bcrypt.compare(password,user.password);
    console.log(result);
    return {
      user: {user:user.username},
      success: result
  }
  }
  
}
