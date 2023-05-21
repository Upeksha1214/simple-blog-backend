import { Controller, Post, Body, } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
const bcrypt = require('bcrypt');

@Controller('api/login')
export class LoginController {
  constructor(private readonly loginService: LoginService){}
  
  @Post()
  login (@Body() loginDto:CreateLoginDto) {
   return this.loginService.getByUsername(loginDto.userName,loginDto.password)
   
  }

}
