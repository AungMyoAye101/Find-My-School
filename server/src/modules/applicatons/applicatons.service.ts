import { Injectable } from '@nestjs/common';
import { CreateApplicatonDto } from './dto/create-applicaton.dto';
import { UpdateApplicatonDto } from './dto/update-applicaton.dto';

@Injectable()
export class ApplicatonsService {
  create(createApplicatonDto: CreateApplicatonDto) {
    return 'This action adds a new applicaton';
  }

  findAll() {
    return `This action returns all applicatons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} applicaton`;
  }

  update(id: number, updateApplicatonDto: UpdateApplicatonDto) {
    return `This action updates a #${id} applicaton`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicaton`;
  }
}
