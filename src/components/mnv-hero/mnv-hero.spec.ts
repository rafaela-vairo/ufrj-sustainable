import { TestWindow } from '@stencil/core/testing';
import { MnvHero } from './mnv-hero';

describe('mnv-hero', () => {
  it('should build', () => {
    expect(new MnvHero()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvHeroElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvHero],
        html: '<mnv-hero></mnv-hero>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
