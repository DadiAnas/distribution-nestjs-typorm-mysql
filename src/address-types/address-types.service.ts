import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Address_types } from './model/address-types.entity';

@Injectable()
export class Address_typesService extends TypeOrmCrudService<Address_types> {
  constructor(@InjectRepository(Address_types) address_typesRepository: Repository<Address_types>) {
    super(address_typesRepository);
  }
}
