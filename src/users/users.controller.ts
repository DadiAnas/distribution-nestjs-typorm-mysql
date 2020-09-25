import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud } from '@nestjsx/crud';
import { Users } from './model/users.entity';

@Crud({
  model: { type: Users },
})
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}
}