import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Address } from './model/address.entity';

@Injectable()
export class AddressService extends TypeOrmCrudService<Address> {
  constructor(@InjectRepository(Address) addressRepository: Repository<Address>) {
    super(addressRepository);
  }
}
