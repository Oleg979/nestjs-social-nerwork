import { Injectable } from '@nestjs/common';
import { LoginResponse } from 'src/models/login-response.model';
import { LoginBody } from 'src/models/login-body.model';
import { RegisterBody } from 'src/models/register-body.model';
import { RegisterResponse } from 'src/models/register-response.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async login(loginBody: LoginBody): Promise<LoginResponse> {
    const user: User = await this.userModel
      .findOne({ email: loginBody.email })
      .exec();
    if (user) {
      if (user.password === loginBody.password) {
        return {
          username: user.email,
          success: true,
        };
      } else {
        return {
          success: false,
          error: 'Неверный пароль',
        };
      }
    } else {
      return {
        success: false,
        error: 'Пользователя с таким именем не существует',
      };
    }
  }

  async register(registerBody: RegisterBody): Promise<RegisterResponse> {
    const exists: boolean = await this.userModel.exists({email: registerBody.email});
    if(exists) {
      return {
        success: false,
        error: "Пользователь уже существует"
      }
    } else {
      const user: User = await this.userModel.create({...registerBody});
      return {
        success: true,
        username: user.email
      }
    }
  }
}
