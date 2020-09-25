import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Palets_has_packs } from './model/palets-has-packs.entity';

@Injectable()
export class PaletsHasPacksService extends TypeOrmCrudService<
  Palets_has_packs
> {
  constructor(
    @InjectRepository(Palets_has_packs)
    paletsHasPacksRipository: Repository<Palets_has_packs>,
  ) {
    super(paletsHasPacksRipository);
  }
}
