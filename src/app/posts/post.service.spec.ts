import { TestBed } from '@angular/core/testing';

import { PostsService } from './post.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('PostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });
});
