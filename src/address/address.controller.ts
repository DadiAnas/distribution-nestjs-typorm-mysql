import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';
import { Crud } from '@nestjsx/crud';
import { Address } from './model/address.entity';

@Crud({
  model: { type: Address },
})
@Controller('address')
export class AddressController {
  constructor(public service: AddressService) {}
}