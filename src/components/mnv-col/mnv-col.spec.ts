import { TestWindow } from '@stencil/core/testing';
import { MnvCol } from './mnv-col';

describe('mnv-col', () => {
  it('should build', () => {
    expect(new MnvCol()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvColElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvCol],
        html: '<mnv-col></mnv-col>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
