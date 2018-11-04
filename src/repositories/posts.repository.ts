import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { posts } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class PostsRepository extends DefaultCrudRepository<
  posts,
  typeof posts.prototype._id
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(posts, dataSource);
  }
}
