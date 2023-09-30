import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Study } from './entities/school.entity';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createSchoolDto: CreateSchoolDto) {
    return 'This action adds a new school';
  }

  async findAll(offset: number, limit: number) {
    const res = await this.prisma.studies.findMany({
      skip: +offset,
      take: +limit,
      include: {
        study_names: true,
        run_names: true,
        languages: true,
        isced: true,
        institutions: true,
        cooperators: true,
      },
    });
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
