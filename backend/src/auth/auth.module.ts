import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller';
import { UserService } from '../auth/user/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]),   
    JwtModule.register({
    secretOrPrivateKey: 'secret12356789'
    })],
    providers: [AuthService, UserService],
    controllers: [AuthController]
})
export class AuthModule {}