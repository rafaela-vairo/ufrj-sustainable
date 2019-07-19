import { TestWindow } from '@stencil/core/testing';
import { MnvBase } from './mnv-base';

describe('mnv-base', () => {
  it('should build', () => {
    expect(new MnvBase()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvBaseElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvBase],
        html: '<mnv-base></mnv-base>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
