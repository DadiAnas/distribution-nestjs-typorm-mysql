import { Controller } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Crud } from '@nestjsx/crud';
import { Countries } from './model/countries.entity';

@Crud({
  model: { type: Countries },
})
@Controller('countries')
export class CountriesController {
  constructor(public service: CountriesService) {}
}