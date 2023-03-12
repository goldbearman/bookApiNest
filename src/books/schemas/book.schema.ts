import {Prop, Schema, SchemaFactory, raw} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema} from 'mongoose';


export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop({required: true})
    public title: string;

    @Prop({required: true})
    public description: string;

    @Prop({default:""})
    authors: string;

    @Prop({default:""})
    favorite: string;

    @Prop({default:""})
    fileCover: string;

    @Prop({default:""})
    fileName: string;

}

export const BookSchema = SchemaFactory.createForClass(Book);
