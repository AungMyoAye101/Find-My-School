import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicatonDto } from './create-applicaton.dto';

export class UpdateApplicatonDto extends PartialType(CreateApplicatonDto) {}
