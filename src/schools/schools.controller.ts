import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    // return this.schoolsService.create(createSchoolDto);
  }

  @Get('/')
  async findAll(@Query('offset') offset: number = 0, @Query('limit') limit: number = 25) {
    return await this.schoolsService.findAll(offset, limit);
  }

  @Get('/name')
  async findByName(@Query('offset') offset: number = 0, @Query('limit') limit: number = 25, @Query('name') name: string) {
    return await this.schoolsService.findByName(offset, limit, name);
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
