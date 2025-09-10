// search.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { PagesService } from './pages.service';
import { SearchQueryDto } from 'src/dto/page.dto';

@Controller('search')
export class PagesController {
  constructor(private readonly searchService: PagesService) {}

  @Get()
  search(@Query() query: SearchQueryDto) {
    return this.searchService.search(query);
  }
}
