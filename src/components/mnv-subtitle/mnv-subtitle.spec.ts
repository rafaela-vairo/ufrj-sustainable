import { TestWindow } from '@stencil/core/testing';
import { MnvSubtitle } from './mnv-subtitle';

describe('mnv-subtitle', () => {
  it('should build', () => {
    expect(new MnvSubtitle()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvSubtitleElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvSubtitle],
        html: '<mnv-subtitle></mnv-subtitle>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
