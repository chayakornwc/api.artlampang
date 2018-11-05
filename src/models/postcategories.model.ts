import { Entity, model, property, hasMany } from '@loopback/repository';
import { posts } from './posts.model'
@model()
export class postcategories extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  key: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  _v: number;


  /**
   * Items in the categoires
   */
  @property.array(posts)
  postsitem?: posts[];


  @hasMany(() => posts, { keyTo: 'categories' })
  posts: posts[];

  constructor(data?: Partial<postcategories>) {
    super(data);
  }
}
