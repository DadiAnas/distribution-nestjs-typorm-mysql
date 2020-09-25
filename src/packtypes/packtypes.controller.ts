import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AddPacks } from './model/packtypes.dto';
import { Packtypes } from './model/packtypes.entity';
import { PacktypesService } from './packtypes.service';

@Crud({
  model: { type: Packtypes },
  query: {
    join: {
      packs: {
        eager: true,
      },
    },
  },
})
@Controller('packtypes')
export class PacktypesController {
  constructor(public service: PacktypesService) {}

  @Get('/:id/packs')
  packs(@Param('id') id) {
    return this.service.Packs(id);
  }
  @Post('/:id/packs')
  addPacks(@Body() payload: AddPacks) {
    return this.service.addPacks(payload);
  }
}
