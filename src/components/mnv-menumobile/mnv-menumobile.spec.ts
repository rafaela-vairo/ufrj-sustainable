import { TestWindow } from '@stencil/core/testing';
import { MnvMenumobile } from './mnv-menumobile';

describe('mnv-menumobile', () => {
  it('should build', () => {
    expect(new MnvMenumobile()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvMenumobileElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvMenumobile],
        html: '<mnv-menumobile></mnv-menumobile>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
