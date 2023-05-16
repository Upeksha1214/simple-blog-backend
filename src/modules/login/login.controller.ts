import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { Model } from 'mongoose';
import { SignUpDocument } from 'src/schemas/signup_form.schema';
import { SignupService } from '../signup/signup.service';
import { CreateLoginDto } from './dto/create-login.dto';
const bcrypt = require('bcrypt');

@Controller('api/login')
export class LoginController {
  constructor(private readonly loginService: LoginService){}
  
  @Post()
  login (@Body() loginDto:CreateLoginDto) {
    this.loginService.getByUsername(loginDto.userName,loginDto.password)
    
  }

}
