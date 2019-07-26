import { TestWindow } from '@stencil/core/testing';
import { MnvMenubuttonmobile } from './mnv-menubuttonmobile';

describe('mnv-menubuttonmobile', () => {
  it('should build', () => {
    expect(new MnvMenubuttonmobile()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvMenubuttonmobileElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvMenubuttonmobile],
        html: '<mnv-menubuttonmobile></mnv-menubuttonmobile>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
