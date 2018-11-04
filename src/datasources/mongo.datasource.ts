import { inject } from '@loopback/core';
import { juggler, AnyObject } from '@loopback/repository';
import * as config from './mongo.config';
export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', { optional: true })
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig);

  }
}
