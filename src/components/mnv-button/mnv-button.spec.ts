import { TestWindow } from '@stencil/core/testing';
import { MnvButton } from './mnv-button';

describe('mnv-button', () => {
  it('should build', () => {
    expect(new MnvButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvButton],
        html: '<mnv-button></mnv-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
