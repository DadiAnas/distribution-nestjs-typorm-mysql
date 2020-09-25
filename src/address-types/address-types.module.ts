import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address_types } from './model/address-types.entity';
import { Address_typesController } from './address-types.controller';
import { Address_typesService } from './address-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address_types])],
  controllers: [Address_typesController],
  providers: [Address_typesService],
})
export class Address_typesModule {}