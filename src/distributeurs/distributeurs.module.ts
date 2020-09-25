import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distributeurs } from './model/distributeurs.entity';
import { DistributeursController } from './distributeurs.controller';
import { DistributeursService } from './distributeurs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Distributeurs])],
  controllers: [DistributeursController],
  providers: [DistributeursService],
})
export class DistributeursModule {}