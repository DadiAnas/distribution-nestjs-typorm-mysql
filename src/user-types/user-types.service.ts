import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { User_types } from './model/user-types.entity';

@Injectable()
export class User_typesService extends TypeOrmCrudService<User_types> {
  constructor(@InjectRepository(User_types) user_typesRepository: Repository<User_types>) {
    super(user_typesRepository);
  }
}
