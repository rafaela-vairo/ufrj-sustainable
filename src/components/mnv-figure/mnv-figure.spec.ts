import { TestWindow } from '@stencil/core/testing';
import { MnvFigure } from './mnv-figure';

describe('mnv-figure', () => {
  it('should build', () => {
    expect(new MnvFigure()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvFigureElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvFigure],
        html: '<mnv-figure></mnv-figure>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
