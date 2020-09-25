import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud } from '@nestjsx/crud';
import { Users } from './model/users.entity';

@Crud({
  model: { type: Users },
  query: {
    join: {
      user_types: {
        eager: true,
      },
    },
  },
})
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}
}
