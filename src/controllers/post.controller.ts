
import { inject } from '@loopback/core';
import { get, param, HttpErrors } from '@loopback/rest';
import {
  PostService,
  Posts,
  Post,
  sluckParams
} from '../services/post.service';
export class PostController {
  constructor(
    @inject("services.PostService")
    protected PostService: PostService
  ) { }
  @get('/api/post/{post_sluck}')
  async _findById(@param.path.string('post_sluck') sluck: string): Promise<Post> {
    //Preconditions
    if (sluck) {
      throw new HttpErrors.PreconditionFailed('Cannot divide by zero');
    }
    return await this.PostService.findById(<sluckParams>{
      sluck
    });
  }
  async _findAll(): Promise<Posts> {
    return await this.PostService.findAll()
  }
}
