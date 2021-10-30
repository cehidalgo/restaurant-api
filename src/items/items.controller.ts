import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Item, Items } from './classes';

import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Items> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body('item') item: Item): Promise<void> {
    this.itemsService.create(item);
  }

  @Get(':id')
  async getItemById(@Param(`id`) id: number): Promise<Item> {
    return this.itemsService.find(id);
  }

  @Put(':id')
  async updateItem(
    @Body('item') item: Item,
    @Param('id') id: number,
  ): Promise<void> {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  async delete(@Param(`id`) id: number): Promise<void> {
    return this.itemsService.delete(id);
  }
}
