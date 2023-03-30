import { Controller, Get } from '@nestjs/common';
import { User } from 'src/model/User';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    const listUsers: User[] = await this.userService.findAll().then();
    console.log(listUsers);
    return listUsers;
  }
}
