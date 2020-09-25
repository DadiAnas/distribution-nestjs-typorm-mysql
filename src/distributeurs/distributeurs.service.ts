import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Distributeurs } from './model/distributeurs.entity';

@Injectable()
export class DistributeursService extends TypeOrmCrudService<Distributeurs> {
  constructor(@InjectRepository(Distributeurs) distributeursRepository: Repository<Distributeurs>) {
    super(distributeursRepository);
  }
}
