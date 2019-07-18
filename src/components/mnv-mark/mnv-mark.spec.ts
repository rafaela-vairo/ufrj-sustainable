import { TestWindow } from '@stencil/core/testing';
import { MnvMark } from './mnv-mark';

describe('mnv-mark', () => {
  it('should build', () => {
    expect(new MnvMark()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvMarkElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvMark],
        html: '<mnv-mark></mnv-mark>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
