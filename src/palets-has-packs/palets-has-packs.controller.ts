import { Controller } from '@nestjs/common';
import { PaletsHasPacksService } from './palets-has-packs.service';
import { Crud } from '@nestjsx/crud';
import { Palets_has_packs } from './model/palets-has-packs.entity';

@Crud({
  model: { type: Palets_has_packs },
  query: {
    join: {
      palets: {
        eager: true,
      },
      packs: {
        eager: true,
      },
    },
  },
})
@Controller('palets_has_packs')
export class PaletsHasPacksController {
  constructor(public service: PaletsHasPacksService) {}
}
