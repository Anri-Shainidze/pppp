import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { UserDto } from 'src/dto/user.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  private users: UserDto[] = [];
  @Get('/all')
  getAllUsers() {
    return this.registerService.getAllUsers();
  }
  @Post('/user')
  registerUser(@Body() data: UserDto) {
    return this.registerService.registerUser(data);
  }
}
