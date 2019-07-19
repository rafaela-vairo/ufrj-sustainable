import { TestWindow } from '@stencil/core/testing';
import { MnvParagraph } from './mnv-paragraph';

describe('mnv-paragraph', () => {
  it('should build', () => {
    expect(new MnvParagraph()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvParagraphElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvParagraph],
        html: '<mnv-paragraph></mnv-paragraph>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
