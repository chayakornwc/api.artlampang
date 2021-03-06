import { Entity, model, property, hasMany } from '@loopback/repository';
import { NamespacedReflect } from '@loopback/core';
import { postcategories } from './postcategories.model'
@model()

export class posts extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  _id: string;

  @property({
    type: 'string',
  })
  slug?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  categories: object[];

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'number',
    required: true,
  })
  _v: number;

  @property({
    type: 'object',
  })
  content?: object;

  @property({
    type: 'object',
  })
  image?: object;

  @property({
    type: 'date',
    required: true,
  })
  publishedDate: string;



  constructor(data?: Partial<posts>) {
    super(data);
  }
}
