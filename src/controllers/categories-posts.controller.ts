import { PostcategoriesRepository, PostsRepository } from '../repositories/';
import { posts } from '../models/';
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
  HttpErrors,
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
  ) {
    /**
   * Create or update the orders for a given user
   * @param categories categories id
   */
  }
  @get('/api/categories/{id}/find')
  async findPost(@param.path.string('id') categoriesId: string) {
    const posts = await this.PostcategoriesRepository.posts(categoriesId);
    if (post == null) {
      throw new HttpErrors.NotFound(
        ` Posts not found for categories: ${categoriesId}`,
      );
    } else {
      return post
    }
  }


  @get('/api/categories/{id}/posts')
  async findPosts(
    @param.path.string('id') categories: string,
    @param.query.string('filter') filter?: Filter,
  ): Promise<posts[]> {
    const posts = await this.PostcategoriesRepository
      .posts(categories)
      .find(filter, { strictObjectIDCoercion: true })
    console.log(categories)
    return posts
  }

}
