import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { USER_AUTH_LOCAL } from 'src/constants/auth-strategy-names';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard(USER_AUTH_LOCAL))
  @Post('/user/login')
  userLogin(@Request()req){
    return this.authService.loginUser(req.user)
  }

}
