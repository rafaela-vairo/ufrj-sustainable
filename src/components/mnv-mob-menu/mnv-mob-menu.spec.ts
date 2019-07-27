import { TestWindow } from '@stencil/core/testing';
import { MnvMobMenu } from './mnv-mob-menu';

describe('mnv-mob-menu', () => {
  it('should build', () => {
    expect(new MnvMobMenu()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvMobMenuElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvMobMenu],
        html: '<mnv-mob-menu></mnv-mob-menu>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
