import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Persons } from './model/persons.entity';

@Injectable()
export class PersonsService extends TypeOrmCrudService<Persons> {
  constructor(@InjectRepository(Persons) personsRepository: Repository<Persons>) {
    super(personsRepository);
  }
}
