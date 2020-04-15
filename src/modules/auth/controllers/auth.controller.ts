import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { LoginBody } from 'src/models/login-body.model';
import { RegisterBody } from 'src/models/register-body.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  ping() {
    return { text: 'Hello World' };
  }

  @Post('login')
  async login(@Res() res, @Body() loginBody: LoginBody) {
    const response = await this.authService.login(loginBody);
    return res.json(response);
  }

  @Post('register')
  async register(@Res() res, @Body() registerBody: RegisterBody) {
    const response = await this.authService.register(registerBody);
    return res.json(response);
  }

  @Get("users")
  async getUsers(@Res() res) {
    const response = await this.authService.getAllUsers();
    return res.json(response);
  }
}
