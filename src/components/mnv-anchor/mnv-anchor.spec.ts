import { TestWindow } from '@stencil/core/testing';
import { MnvAnchor } from './mnv-anchor';

describe('mnv-anchor', () => {
  it('should build', () => {
    expect(new MnvAnchor()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvAnchorElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvAnchor],
        html: '<mnv-anchor></mnv-anchor>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
