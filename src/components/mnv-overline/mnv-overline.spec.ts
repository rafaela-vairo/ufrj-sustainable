import { TestWindow } from '@stencil/core/testing';
import { MnvOverline } from './mnv-overline';

describe('mnv-overline', () => {
  it('should build', () => {
    expect(new MnvOverline()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvOverlineElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvOverline],
        html: '<mnv-overline></mnv-overline>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
