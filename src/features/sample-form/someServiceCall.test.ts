import someServiceCall from './someServiceCall';

describe('someServiceCall', () => {
  it('should resolve true', async () => {
    const mockArgs = {username: 'user1', password: 'pass1'};
    const value = await someServiceCall(mockArgs);
    expect(value).toBe(true);
  });
});