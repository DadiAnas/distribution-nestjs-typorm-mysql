from os import system, getcwd, mkdir


# tables names
tables_names = ["countries","address", "address_types", "persons", "users", "user_types", "distributeurs", "distributeur_has_product"]

# get Current directory path
cwd = getcwd()

# what to write in entity file


def entityFile_string(table_name):
    return """import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
}   from 'typeorm';

@Entity()
export class """+table_name.capitalize()+""" {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
    """


def moduleFile_string(table_name, table_name_6):
    capitalized_name = table_name.capitalize()
    return """import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { """+capitalized_name+""" } from './model/"""+table_name_6+""".entity';
import { """+capitalized_name+"""Controller } from './"""+table_name_6+""".controller';
import { """+capitalized_name+"""Service } from './"""+table_name_6+""".service';

@Module({
  imports: [TypeOrmModule.forFeature(["""+capitalized_name+"""])],
  controllers: ["""+capitalized_name+"""Controller],
  providers: ["""+capitalized_name+"""Service],
})
export class """+capitalized_name+"""Module {}"""


def serviceFile_string(table_name, table_name_6):
    capitalized_name = table_name.capitalize()
    return """import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { """+capitalized_name+""" } from './model/"""+table_name_6+""".entity';

@Injectable()
export class """+capitalized_name+"""Service extends TypeOrmCrudService<"""+capitalized_name+"""> {
  constructor(@InjectRepository("""+capitalized_name+""") """+table_name+"""Repository: Repository<"""+capitalized_name+""">) {
    super("""+table_name+"""Repository);
  }
}
"""


def controllerFile_string(table_name, table_name_6):
    capitalized_name = table_name.capitalize()
    return """import { Controller } from '@nestjs/common';
import { """+capitalized_name+"""Service } from './"""+table_name_6+""".service';
import { Crud } from '@nestjsx/crud';
import { """+capitalized_name+""" } from './model/"""+table_name_6+""".entity';

@Crud({
  model: { type: """+capitalized_name+""" },
})
@Controller('"""+table_name+"""')
export class """+capitalized_name+"""Controller {
  constructor(public service: """+capitalized_name+"""Service) {}
}"""


for table_name in tables_names:
    table_name_6 = table_name.replace('_', '-')
    # Generate service, contoller and module files
    system("nest g s "+table_name)
    system("nest g co "+table_name)
    system("nest g mo "+table_name)
    # create model folder
    mkdir(cwd+"\\src\\"+table_name_6+"\\model")

    entity_file = cwd+"\\src\\"+table_name_6+"\\model\\"+table_name_6+".entity.ts"
    with open(entity_file, 'w+') as entityFile:
        entityFile.write(entityFile_string(table_name))

    module_file = cwd+"\\src\\"+table_name_6+"\\"+table_name_6+".module.ts"
    with open(module_file, 'w') as moduleFile:
        moduleFile.write(moduleFile_string(table_name, table_name_6))

    service_file = cwd+"\\src\\"+table_name_6+"\\"+table_name_6+".service.ts"
    with open(service_file, 'w') as moduleFile:
        moduleFile.write(serviceFile_string(table_name, table_name_6))

    controller_file = cwd+"\\src\\"+table_name_6+"\\"+table_name_6+".controller.ts"
    with open(controller_file, 'w') as moduleFile:
        moduleFile.write(controllerFile_string(table_name, table_name_6))
