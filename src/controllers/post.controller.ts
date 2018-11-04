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
import { posts } from '../models';
import { PostsRepository } from '../repositories';

export class PostController {
  constructor(
    @repository(PostsRepository)
    public postsRepository: PostsRepository,
  ) { }


  @get('/api/posts', {
    responses: {
      '200': {
        description: 'Array of Posts model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': posts } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(posts)) filter?: Filter,
  ): Promise<posts[]> {
    return await this.postsRepository.find(filter);
  }


  @get('/api/post/{id}', {
    responses: {
      '200': {
        description: 'Posts model instance',
        content: { 'application/json': { 'x-ts-type': posts } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<posts> {
    return await this.postsRepository.findById(id);
  }

}
