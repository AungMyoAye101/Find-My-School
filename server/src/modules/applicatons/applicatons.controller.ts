import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicatonsService } from './applicatons.service';
import { CreateApplicatonDto } from './dto/create-applicaton.dto';
import { UpdateApplicatonDto } from './dto/update-applicaton.dto';

@Controller('applicatons')
export class ApplicatonsController {
  constructor(private readonly applicatonsService: ApplicatonsService) {}

  @Post()
  create(@Body() createApplicatonDto: CreateApplicatonDto) {
    return this.applicatonsService.create(createApplicatonDto);
  }

  @Get()
  findAll() {
    return this.applicatonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicatonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicatonDto: UpdateApplicatonDto) {
    return this.applicatonsService.update(+id, updateApplicatonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicatonsService.remove(+id);
  }
}
