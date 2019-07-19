import { TestWindow } from '@stencil/core/testing';
import { MnvRow } from './mnv-row';

describe('mnv-row', () => {
  it('should build', () => {
    expect(new MnvRow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvRowElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvRow],
        html: '<mnv-row></mnv-row>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
