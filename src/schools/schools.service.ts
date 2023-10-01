import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Cooperator, Institution, Isced, Language, Study } from './entities/school.entity';
import { CityPipePipe } from 'src/city-pipe/city-pipe.pipe';
import { StudyStatus, Title } from './entities/enums.entity';

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
    language: string | null,
    institution: string | null,
    run_title: string | null,
    run_form: string | null,
    run_status: string | null,
    is_for_teacher: string | null,
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
            run_form: {
              equals: run_form == 'true' || undefined,
            },
            run_title: {
              equals: run_title || undefined,
            },
            run_status: {
              equals: run_status || undefined,
            },
            is_for_teacher: is_for_teacher == 'true'  || undefined,
          },
        ],
      }
    })
    return res;
  }


  async getLanguages() {
    const res = await this.prisma.languages.findMany({
      select: {
        language: true,
      }
    })

    const tab = res.map((item) => {
      return item.language;
    })

    return tab;
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
