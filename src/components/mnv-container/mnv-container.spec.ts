import { TestWindow } from '@stencil/core/testing';
import { MnvContainer } from './mnv-container';

describe('mnv-container', () => {
  it('should build', () => {
    expect(new MnvContainer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvContainerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvContainer],
        html: '<mnv-container></mnv-container>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
