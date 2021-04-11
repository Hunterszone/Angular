import { CommentValidPipe } from './comment-valid.pipe';

describe('CommentValidPipe', () => {
  it('create an instance', () => {
    const pipe = new CommentValidPipe();
    expect(pipe).toBeTruthy();
  });
});
