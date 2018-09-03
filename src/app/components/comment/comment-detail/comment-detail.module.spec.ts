import { CommentDetailModule } from './comment-detail.module';

describe('CommentDetailModule', () => {
  let commentDetailModule: CommentDetailModule;

  beforeEach(() => {
    commentDetailModule = new CommentDetailModule();
  });

  it('should create an instance', () => {
    expect(commentDetailModule).toBeTruthy();
  });
});
