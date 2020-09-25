import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palets } from './model/palets.entity';
import { PaletsController } from './palets.controller';
import { PaletsService } from './palets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palets])],
  controllers: [PaletsController],
  providers: [PaletsService],
})
export class PaletsModule {}
