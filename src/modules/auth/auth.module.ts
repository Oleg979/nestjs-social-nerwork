import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserSchema } from 'src/schemas/user.shema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
