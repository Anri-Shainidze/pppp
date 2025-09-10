import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class RegisterService {
  private users: UserDto[] = [];
  registerUser(data: UserDto) {
    this.users.push(data);
    return { message: 'User registered successfully' };
  }
  getAllUsers() {
    return this.users;
  }
}
