import { TestWindow } from '@stencil/core/testing';
import { MnvTooltip } from './mnv-tooltip';

describe('mnv-tooltip', () => {
  it('should build', () => {
    expect(new MnvTooltip()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvTooltipElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvTooltip],
        html: '<mnv-tooltip></mnv-tooltip>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
