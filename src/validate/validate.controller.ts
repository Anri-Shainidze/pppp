/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ValidateService } from './validate.service';
import { CreateOrderDto } from 'src/dto/validate.dto';

@Controller('validate')
export class ValidateController {
  private readonly validateService: ValidateService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(validateService: ValidateService) {
    this.validateService = validateService;
  }
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.validateService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.validateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.validateService.findOne(id);
  }
}
