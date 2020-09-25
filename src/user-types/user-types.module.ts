import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_types } from './model/user-types.entity';
import { User_typesController } from './user-types.controller';
import { User_typesService } from './user-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([User_types])],
  controllers: [User_typesController],
  providers: [User_typesService],
})
export class User_typesModule {}