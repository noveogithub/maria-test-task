import { DateParsePipe } from './date-parse.pipe';

describe('DateValidatedPipe', () => {
  it('create an instance', () => {
    const datePipe: any = { transform: x => x };
    const pipe = new DateParsePipe(datePipe);
    expect(pipe).toBeTruthy();
  });
});
