/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'src/dto/validate.dto';

@Injectable()
export class ValidateService {
  private orders: any = [];
  private idCounter = 1;
  create(CreateOrderDto: CreateOrderDto) {
    const newOrder = {
      id: this.idCounter++,
      ...CreateOrderDto,
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.orders.push(newOrder);
    return { message: 'Order created successfully', order: newOrder };
  }

  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.orders;
  }

  findOne(id: number) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.orders.find((order) => order.id === id);
  }
}
