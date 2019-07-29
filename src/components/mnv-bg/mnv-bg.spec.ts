import { TestWindow } from '@stencil/core/testing';
import { MnvBg } from './mnv-bg';

describe('mnv-bg', () => {
  it('should build', () => {
    expect(new MnvBg()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvBgElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvBg],
        html: '<mnv-bg></mnv-bg>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
