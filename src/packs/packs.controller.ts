import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Packs } from './models/packs.entity';
import { PacksService } from './packs.service';

@Crud({
  model: { type: Packs },
  query: {
    join: {
      packs_has_products: {
        eager: true,
      },
      palets_has_packs: {
        eager: true,
      },
      packtypes: {
        eager: true,
      },
    },
  },
})
@Controller('packs')
export class PacksController {
  constructor(public service: PacksService) {}
}
