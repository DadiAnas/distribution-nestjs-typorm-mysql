import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Palets } from './model/palets.entity';

@Injectable()
export class PaletsService extends TypeOrmCrudService<Palets> {
  constructor(@InjectRepository(Palets) paletRepository: Repository<Palets>) {
    super(paletRepository);
  }
}
