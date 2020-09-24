import { Module } from '@nestjs/common';
import { PaletsHasPacksService } from './palets-has-packs.service';

@Module({
  providers: [PaletsHasPacksService]
})
export class PaletsHasPacksModule {}
