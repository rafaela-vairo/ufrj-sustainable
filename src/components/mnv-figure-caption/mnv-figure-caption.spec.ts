import { TestWindow } from '@stencil/core/testing';
import { MnvFigureCaption } from './mnv-figure-caption';

describe('mnv-figure-caption', () => {
  it('should build', () => {
    expect(new MnvFigureCaption()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvFigureCaptionElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvFigureCaption],
        html: '<mnv-figure-caption></mnv-figure-caption>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
