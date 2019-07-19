import { TestWindow } from '@stencil/core/testing';
import { MnvTitle } from './mnv-title';

describe('mnv-title', () => {
  it('should build', () => {
    expect(new MnvTitle()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvTitleElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvTitle],
        html: '<mnv-title></mnv-title>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
