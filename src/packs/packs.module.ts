import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Packs } from './models/packs.entity';
import { PacksController } from './packs.controller';
import { PacksService } from './packs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Packs])],
  controllers: [PacksController],
  providers: [PacksService],
  exports: [PacksService],
})
export class PacksModule {}
