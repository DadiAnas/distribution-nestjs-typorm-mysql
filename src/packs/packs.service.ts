import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Packs } from './models/packs.entity';

@Injectable()
export class PacksService extends TypeOrmCrudService<Packs> {
  constructor(@InjectRepository(Packs) packsRepository: Repository<Packs>) {
    super(packsRepository);
  }
}
