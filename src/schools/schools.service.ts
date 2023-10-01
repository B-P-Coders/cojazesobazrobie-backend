import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Cooperator, Institution, Isced, Language, Study } from './entities/school.entity';
import { CityPipePipe } from 'src/city-pipe/city-pipe.pipe';

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

  async findByName(
    offset: number,
    limit: number,
    name: string = null,
    // level:  StudyLevel | null = null, 
    // profile: StudyProfile | null = null, 
    // isced: Isced | null = null, 
    language: string | null,
    institution: string | null,
    cooperator: Cooperator | null = null
  ) {
    console.log(institution)
    const res = await this.prisma.studies.findMany({
      skip: +offset,
      take: +limit,
      include: {
        study_names: true,
        run_names: true,
        languages: true,
        institutions: true,
      },
      where: {
        AND: [
          {
            study_names: {
              name: {
                contains: name || undefined,
                mode: 'insensitive',
              },
            },
            languages: {
              language: {
                equals: language || undefined,
                mode: 'insensitive',
              },
            },
            institutions: {
              institution: {
                contains: institution || undefined,
                mode: 'insensitive',
              },
            },
          },
        ],
      }
    })
    // console.log(res)
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
