import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
} from '@loopback/rest';
import { postcategories } from '../models';
import { PostcategoriesRepository } from '../repositories';

export class postcategoriesController {
  constructor(
    @repository(PostcategoriesRepository)
    public postcategoriesRepository: PostcategoriesRepository,
  ) { }


  @get('/api/postcategories/count', {
    responses: {
      '200': {
        description: 'postcategories model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(postcategories)) where?: Where,
  ): Promise<Count> {
    return await this.postcategoriesRepository.count(where);
  }

  @get('/api/postcategories', {
    responses: {
      '200': {
        description: 'Array of postcategories model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': postcategories } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(postcategories)) filter?: Filter,
  ): Promise<postcategories[]> {
    return await this.postcategoriesRepository.find(filter);
  }

  @get('/api/postcategories/{id}', {
    responses: {
      '200': {
        description: 'postcategories model instance',
        content: { 'application/json': { 'x-ts-type': postcategories } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<postcategories> {
    return await this.postcategoriesRepository.findById(id);
  }

}
