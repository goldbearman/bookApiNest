import {Injectable} from '@nestjs/common';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Book, BookDocument} from "./schemas/book.schema";
import {Connection, Model,QueryWithHelpers,HydratedDocument} from "mongoose";
import {CreateBookDto} from "./interface/dto/create-book";

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(Book.name) private BookModel:Model<BookDocument>,
        @InjectConnection() private connection:Connection,
    ) {}

    public create(data:CreateBookDto): Promise<BookDocument> {
        const book = new this.BookModel(data);

        return book.save();
    }

    public getAll(): Promise<BookDocument[]> {
        return this.BookModel.find().exec();
    }

    public update(id:string, data:CreateBookDto): Promise<BookDocument> {
        return this.BookModel.findByIdAndUpdate(id, data).exec();
    }

    public delete(id:string): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument>{
       return this.BookModel.findOneAndRemove({_id: id});
    }
}
