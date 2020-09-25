import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palets_has_packs } from './model/palets-has-packs.entity';
import { PaletsHasPacksService } from './palets-has-packs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palets_has_packs])],
  providers: [PaletsHasPacksService],
})
export class PaletsHasPacksModule {}
