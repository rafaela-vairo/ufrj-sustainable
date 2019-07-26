import { TestWindow } from '@stencil/core/testing';
import { MnvFooter } from './mnv-footer';

describe('mnv-footer', () => {
  it('should build', () => {
    expect(new MnvFooter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvFooterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvFooter],
        html: '<mnv-footer></mnv-footer>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
