import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './database.datasource.json';

export class DatabaseDataSource extends juggler.DataSource {
  static dataSourceName = 'Database';

  constructor(
    @inject('datasources.config.Database', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
