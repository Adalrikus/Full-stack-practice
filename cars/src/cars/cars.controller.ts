import { Controller, Get, Req, Post, Body, Param, Request } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  findAll(@Req() request: Request): {} {
    return [{make: 'honda', model: 'accord'},
           {make: 'subaru', model: 'outback'},
           {make: 'fiat', model: '123 spider'}];
  }

  @Get(':id')
  findOne(@Req() request: Request): {} {
    return {id: 25, make: 'tesla', model: 'model x'}
  }

  @Post()
  async create(@Body() carParams) {
    return `Creating ${carParams.make}`;
  }

  @Post(':id')
  async update(@Body() carParams, @Param() params) {
    return `Updating ${carParams.make} with id: ${params.id}`;
  }

  @Post(':id/delete')
  async delete(@Param() params) {
    return `Deleting id: ${params.id}`;
  }
}
