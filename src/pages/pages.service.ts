// search.service.ts
import { Injectable } from '@nestjs/common';
import { SearchQueryDto } from 'src/dto/page.dto';

@Injectable()
export class PagesService {
  private products = [
    { id: 1, name: 'Laptop Pro' },
    { id: 2, name: 'Gaming Mouse' },
    { id: 3, name: 'Mechanical Keyboard' },
    { id: 4, name: 'USB-C Charger' },
    { id: 5, name: 'Wireless Headphones' },
    { id: 6, name: '4K Monitor' },
  ];

  search(query: SearchQueryDto) {
    let results = this.products;

    if (query.keyword) {
      results = results.filter((p) =>
        p.name.toLowerCase().includes((query.keyword ?? '').toLowerCase()),
      );
    }

    const start = (query.page - 1) * query.limit;
    const end = start + query.limit;
    const paginated = results.slice(start, end);

    return {
      total: results.length,
      page: query.page,
      limit: query.limit,
      results: paginated,
    };
  }
}
