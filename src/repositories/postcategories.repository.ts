import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { postcategories } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class PostcategoriesRepository extends DefaultCrudRepository<postcategories, typeof postcategories.prototype._id> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource, ) {
    super(postcategories, dataSource);
  }
}
