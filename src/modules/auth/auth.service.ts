import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignupService } from '../signup/signup.service';
import { compareAsync } from 'src/utils/bcrypt-compare-async';
@Injectable()
export class AuthService {
  constructor(
    private readonly signupService:SignupService,
    private jwtService: JwtService,
  ){}

  /**
   * Authenticates admin for the local strategy
   * @author UpekshaSachintha
   * @param username
   * @param password - password sent to compare with the original
   * @returns
   */
 
  async authenticateUser(username: string, password: string) {
    const userList: any = await this.signupService.getByUsername(username);

    const user = userList[0];

    const encryptedPassword = user.password;

    const isValidUser = await compareAsync(password, encryptedPassword);

    if (isValidUser)
      return {
        username: user.username,
        sub: user._id,
      };

    return null;
  }
  
  
  loginUser(user: any) {

    const payload={userName:user.userName, sub: user.sub, role:'user'}
    return{
      access_token: this.jwtService.sign(payload),
      userId: user.sub,
    }

    throw new Error('Method not implemented.');
  }
}
