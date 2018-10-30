import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { DatabaseDataSource } from '../datasources';

export interface PostsAll {
  results: {
    PostResult: string
  }
}
export interface PostService {
  PostsAll(args: PostsAll): Promise<PostResult>;
}
export class PostServiceProvider implements Provider<PostService> {
  constructor(@inject("datasources.database")
  protected dataSource: juggler.DataSource = new DatabaseDataSource()) {
  }
  value(): Promise<PostService> {
    return getService(this.dataSource);
  }
}
