import { DefaultCrudRepository, juggler, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { postcategories, posts } from '../models';
import { PostsRepository } from './posts.repository';
import { MongoDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class PostcategoriesRepository extends DefaultCrudRepository<postcategories, typeof postcategories.prototype._id> {
  public readonly posts: HasManyRepositoryFactory<posts, typeof postcategories.prototype._id>;

  constructor(@inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter(PostsRepository) getPostsRepository: Getter<PostsRepository>, ) {
    super(postcategories, dataSource);
    this.posts = this._createHasManyRepositoryFactoryFor(
      'posts',
      getPostsRepository,
    );
  }

}
