import { TestWindow } from '@stencil/core/testing';
import { MnvListCard } from './mnv-list-card';

describe('mnv-list-card', () => {
  it('should build', () => {
    expect(new MnvListCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvListCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvListCard],
        html: '<mnv-list-card></mnv-list-card>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
