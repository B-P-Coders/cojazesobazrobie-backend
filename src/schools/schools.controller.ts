import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, ParseBoolPipe, ParseEnumPipe } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { run } from 'node:test';
import { Title, StudyStatus } from './entities/enums.entity';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }

  @Get('/')
  async findAll(@Query('offset') offset: number = 0, @Query('limit') limit: number = 25) {
    return await this.schoolsService.findAll(offset, limit);
  }

  
  @Get('/search')
  async search(
    @Query('offset') offset: number = 0, 
    @Query('limit') limit: number = 25, 
    @Query('name') name: string, 
    @Query('language') language: string, 
    @Query('institution') institution: string,
    @Query('run_title') run_title: string = null,
    @Query('run_form') run_form: string = null,
    @Query('run_status') run_status?: string | null,
    @Query('is_for_teacher') is_for_teacher: string = null,
  ) {
    return await this.schoolsService.findByName(offset, limit, name, language, institution, run_title, run_form , run_status, is_for_teacher);
  }

  @Get('/languages')
  async getLanguages() {
    return await this.schoolsService.getLanguages();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolsService.remove(+id);
  }
}
