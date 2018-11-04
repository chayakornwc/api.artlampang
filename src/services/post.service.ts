import { getService, juggler } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { MongoDataSource } from '../datasources';

export interface Posts {
  results: {
    PostResult: string
  }
}
export interface Post {
  results: {
    PostResult: string
  }
}
export interface sluckParams {
  sluck: string;
}

//
// # VERB LISTENINING
//
export interface PostService {
  findAll(): Promise<Posts>;
  findById(arg: sluckParams): Promise<Post>;
}
export class PostServiceProvider implements Provider<PostService> {
  constructor(@inject("datasources.database")
  protected dataSource: juggler.DataSource = new MongoDataSource()) {
  }
  value(): Promise<PostService> {
    return getService(this.dataSource);
  }
}
