import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palets } from './models/palets.entity';
import { PaletsService } from './palets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palets])],
  providers: [PaletsService],
})
export class PaletsModule {}
