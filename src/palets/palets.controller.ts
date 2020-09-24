import { Controller } from '@nestjs/common';
import { PaletsService } from './palets.service';
import { Crud } from '@nestjsx/crud';
import { Palets } from './models/palets.entity';

@Crud({
  model: { type: Palets },
})
@Controller('palets')
export class PaletsController {
  constructor(public service: PaletsService) {}
}
