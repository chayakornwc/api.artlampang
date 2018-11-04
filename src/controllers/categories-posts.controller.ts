import { PostcategoriesRepository, PostsRepository } from '../repositories/';
import { postcategories, posts } from '../models/';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import { promises } from 'fs';

export class CategoriesPostsController {
  constructor(
    @repository(PostcategoriesRepository)
    protected PostcategoriesRepository: PostcategoriesRepository,
  ) { }

  @post('/api/categories/{id}/posts')
  async createposts(
    @param.path.string('id') categories: typeof postcategories.prototype._id,
    @requestBody() postData: posts,
  ): Promise<posts> {
    return await this.PostcategoriesRepository.posts(categories).create(postData);
  }
  @get('/api/categories/{categories}/posts')
  async postsCategories(@param.path.string('categories') categories: typeof postcategories.prototype._id,
    @param.query.object('filter', getFilterSchemaFor(posts)) filter: Filter): Promise<posts[]> {
    return await this.PostcategoriesRepository.posts(categories).find()
  }
}
