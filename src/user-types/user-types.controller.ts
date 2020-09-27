import { Controller } from '@nestjs/common';
import { User_typesService } from './user-types.service';
import { Crud } from '@nestjsx/crud';
import { User_types } from './model/user-types.entity';

@Crud({
  model: { type: User_types },
  query: {
    join: {
      users: {
        eager: true,
      },
    },
  },
})
@Controller('user_types')
export class User_typesController {
  constructor(public service: User_typesService) {}
}
