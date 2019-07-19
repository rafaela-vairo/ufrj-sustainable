import { TestWindow } from '@stencil/core/testing';
import { MnvLink } from './mnv-link';

describe('mnv-link', () => {
  it('should build', () => {
    expect(new MnvLink()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvLinkElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvLink],
        html: '<mnv-link></mnv-link>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
