import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from "@nestjs/common";
import { AuthGuard, PassportStrategy } from "@nestjs/passport";
import { USER_AUTH_JWT, USER_AUTH_JWT_WS } from "src/constants/auth-strategy-names";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, USER_AUTH_JWT) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    if (payload?.role !== 'admin') return false;
    return { userId: payload.sub, username: payload.username };
  }
}

@Injectable()
export class WsJwtStrategy extends PassportStrategy(
  Strategy,
  USER_AUTH_JWT_WS,
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    if (payload.role !== 'admin') return false;
    return { userId: payload._id, username: payload.username };
  }
}

// reference: https://github.com/nestjs/nest/issues/3206
export class WsJwtGuard extends AuthGuard([USER_AUTH_JWT_WS]) {
    getRequest(context) {
      return context.switchToWs().getClient().handshake;
    }
  }