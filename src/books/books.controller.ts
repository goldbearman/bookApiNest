import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './interface/dto/create-book';
import { BookDocument } from './schemas/book.schema';
import { IParamId } from './interface/i-param-id';
import { QueryWithHelpers, HydratedDocument } from 'mongoose';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAll(): Promise<BookDocument[]> {
    return this.booksService.getAll();
  }

  @Post()
  public create(@Body() body: CreateBookDto): Promise<BookDocument> {
    return this.booksService.create(body);
  }

  @Put(':id')
  public update(
    @Param() { id }: IParamId,
    @Body() data: CreateBookDto,
  ): Promise<BookDocument> {
    return this.booksService.update(id, data);
  }

  @Delete(':id')
  public delete(@Param() { id }: IParamId): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
    return this.booksService.delete(id);
  }
}
