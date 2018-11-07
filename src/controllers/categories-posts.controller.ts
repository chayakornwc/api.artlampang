import { PostcategoriesRepository, PostsRepository } from '../repositories';
import { posts } from '../models';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  AnyType,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  HttpErrors,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';

export class CategoriesPostsController {
  constructor(
    @repository(PostcategoriesRepository)
    protected PostcategoriesRepository: PostcategoriesRepository,
  ) {
    /**
   * Create or update the orders for a given user
   * @param categories categories id
   */
  }



  @get('/api/categories/{id}/posts', {
    responses: {
      '200': {
        description: 'Array of Posts model',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': posts } },
          },
        },
      },
    },
  })
  async findPosts(
    @param.path.string('id') categories: string,
    @param.query.string('filter') filter?: Filter,

  ): Promise<posts[]> {
    let posts = await this.PostcategoriesRepository
      .posts(categories)
      .find(filter)
    var contain = await this.PostcategoriesRepository
      .findById(categories)
    return posts
  }

}
