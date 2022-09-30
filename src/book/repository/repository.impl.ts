import { InjectConnection, InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BookRepository } from './repository';

export class BookRepositoryImpl implements BookRepository {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource
  ) { }
  createBook(data: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}