import { TestWindow } from '@stencil/core/testing';
import { MnvBignumber } from './mnv-bignumber';

describe('mnv-bignumber', () => {
  it('should build', () => {
    expect(new MnvBignumber()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvBignumberElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvBignumber],
        html: '<mnv-bignumber></mnv-bignumber>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
