import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from "@nestjs/mongoose";
import {Book} from "./interface/book.interface";

@Module({
  imports:[MongooseModule.forFeature([{name:Book, schema: Book}])]
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class CatsModule {}
