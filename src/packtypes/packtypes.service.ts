import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PacksService } from 'src/packs/packs.service';
import { Repository } from 'typeorm';
import { AddPacks } from './model/packtypes.dto';
import { Packtypes } from './model/packtypes.entity';

@Injectable()
export class PacktypesService extends TypeOrmCrudService<Packtypes> {
  constructor(
    @InjectRepository(Packtypes)
    private packtypesRepository: Repository<Packtypes>,
    private packsService: PacksService,
  ) {
    super(packtypesRepository);
  }

  async Packs(id: number) {
    const categorie = await this.packtypesRepository.findOneOrFail(id, {
      relations: ['packs'],
    });
    return categorie.packs || [];
  }

  async addPacks(payload: AddPacks) {
    const packtypes = await this.packtypesRepository.findOne(
      payload.packtypesId,
    );
    const prod = await this.packsService.findOne(payload.packsId);
    packtypes.packs = [...(packtypes.packs || []), prod];
    return await this.packtypesRepository.save(packtypes);
  }
}
