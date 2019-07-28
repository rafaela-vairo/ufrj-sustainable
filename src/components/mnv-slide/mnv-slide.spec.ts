import { TestWindow } from '@stencil/core/testing';
import { MnvSlide } from './mnv-slide';

describe('mnv-slide', () => {
  it('should build', () => {
    expect(new MnvSlide()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvSlideElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvSlide],
        html: '<mnv-slide></mnv-slide>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
