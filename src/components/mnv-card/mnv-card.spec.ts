import { TestWindow } from '@stencil/core/testing';
import { MnvCard } from './mnv-card';

describe('mnv-card', () => {
  it('should build', () => {
    expect(new MnvCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvCard],
        html: '<mnv-card></mnv-card>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
