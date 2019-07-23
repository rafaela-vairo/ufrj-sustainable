import { TestWindow } from '@stencil/core/testing';
import { MnvDivider } from './mnv-divider';

describe('mnv-divider', () => {
  it('should build', () => {
    expect(new MnvDivider()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvDividerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvDivider],
        html: '<mnv-divider></mnv-divider>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
