import { Controller } from '@nestjs/common';
import { PaletsService } from './palets.service';
import { Crud } from '@nestjsx/crud';
import { Palets } from './model/palets.entity';

@Crud({
  model: { type: Palets },
  query: {
    join: {
      palets_has_packs: {
        eager: true,
      },
    },
  },
})
@Controller('palets')
export class PaletsController {
  constructor(public service: PaletsService) {}
}
