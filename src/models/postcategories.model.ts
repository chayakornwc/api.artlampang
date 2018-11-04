import { Entity, model, property } from '@loopback/repository';

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

  constructor(data?: Partial<postcategories>) {
    super(data);
  }
}
