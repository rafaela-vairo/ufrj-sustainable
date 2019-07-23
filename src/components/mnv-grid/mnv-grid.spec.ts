import { TestWindow } from '@stencil/core/testing';
import { MnvGrid } from './mnv-grid';

describe('mnv-grid', () => {
  it('should build', () => {
    expect(new MnvGrid()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvGridElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvGrid],
        html: '<mnv-grid></mnv-grid>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
