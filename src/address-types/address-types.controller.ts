import { Controller } from '@nestjs/common';
import { Address_typesService } from './address-types.service';
import { Crud } from '@nestjsx/crud';
import { Address_types } from './model/address-types.entity';

@Crud({
  model: { type: Address_types },
})
@Controller('address_types')
export class Address_typesController {
  constructor(public service: Address_typesService) {}
}