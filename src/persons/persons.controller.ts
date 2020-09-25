import { Controller } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Crud } from '@nestjsx/crud';
import { Persons } from './model/persons.entity';

@Crud({
  model: { type: Persons },
  query: {
    join: {
      distributeurs: {
        eager: true,
      },
      address: {
        eager: true,
      },
    },
  },
})
@Controller('persons')
export class PersonsController {
  constructor(public service: PersonsService) {}
}
