import { Module } from '@nestjs/common';
import { ApplicatonsService } from './applicatons.service';
import { ApplicatonsController } from './applicatons.controller';

@Module({
  controllers: [ApplicatonsController],
  providers: [ApplicatonsService],
})
export class ApplicatonsModule {}
