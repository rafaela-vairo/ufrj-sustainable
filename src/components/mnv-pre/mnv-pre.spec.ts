import { TestWindow } from '@stencil/core/testing';
import { MnvPre } from './mnv-pre';

describe('mnv-pre', () => {
  it('should build', () => {
    expect(new MnvPre()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvPreElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvPre],
        html: '<mnv-pre></mnv-pre>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
