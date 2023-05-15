import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SignupModule } from '../signup/signup.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { SignupService } from '../signup/signup.service';
import { UserLocalStrategy } from './auth.strategy';
import { JwtStrategy, WsJwtGuard, WsJwtStrategy } from './auth-jwt.strategy';

@Module({
  imports:[
    SignupModule,
    PassportModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (config:ConfigService) =>({
        secret: config.get<string>('JWT_SECRET'),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    SignupService,
    UserLocalStrategy,
    JwtStrategy,
    WsJwtGuard,
    WsJwtStrategy,
   
  ]
})
export class AuthModule {}
