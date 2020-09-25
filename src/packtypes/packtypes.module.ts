import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacksModule } from 'src/packs/packs.module';
import { Packtypes } from './model/packtypes.entity';
import { PacktypesController } from './packtypes.controller';
import { PacktypesService } from './packtypes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Packtypes]), PacksModule],
  controllers: [PacktypesController],
  providers: [PacktypesService],
})
export class PacktypesModule {}
