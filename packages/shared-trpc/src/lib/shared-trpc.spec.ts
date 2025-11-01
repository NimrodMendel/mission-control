import { sharedTrpc } from './shared-trpc';

describe('sharedTrpc', () => {
  it('should work', () => {
    expect(sharedTrpc()).toEqual('shared-trpc');
  });
});
