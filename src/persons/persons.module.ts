import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persons } from './model/persons.entity';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';

@Module({
  imports: [TypeOrmModule.forFeature([Persons])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}