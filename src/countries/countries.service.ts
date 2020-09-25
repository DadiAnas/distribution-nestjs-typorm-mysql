import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Countries } from './model/countries.entity';

@Injectable()
export class CountriesService extends TypeOrmCrudService<Countries> {
  constructor(@InjectRepository(Countries) countriesRepository: Repository<Countries>) {
    super(countriesRepository);
  }
}
