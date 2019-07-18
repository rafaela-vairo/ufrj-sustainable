import { TestWindow } from '@stencil/core/testing';
import { MnvStrong } from './mnv-strong';

describe('mnv-strong', () => {
  it('should build', () => {
    expect(new MnvStrong()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvStrongElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvStrong],
        html: '<mnv-strong></mnv-strong>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
