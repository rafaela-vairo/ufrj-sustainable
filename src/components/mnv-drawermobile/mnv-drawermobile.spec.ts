import { TestWindow } from '@stencil/core/testing';
import { MnvDrawermobile } from './mnv-drawermobile';

describe('mnv-drawermobile', () => {
  it('should build', () => {
    expect(new MnvDrawermobile()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvDrawermobileElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvDrawermobile],
        html: '<mnv-drawermobile></mnv-drawermobile>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
