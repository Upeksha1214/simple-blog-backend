import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { USER_AUTH_LOCAL } from "src/constants/auth-strategy-names";
import { AuthService } from './auth.service';

@Injectable()
export class UserLocalStrategy extends PassportStrategy(
    Strategy,
    USER_AUTH_LOCAL
){
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.authenticateUser(username, password);
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
      }
}
