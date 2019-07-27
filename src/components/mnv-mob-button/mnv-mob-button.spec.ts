import { TestWindow } from '@stencil/core/testing';
import { MnvMobButton } from './mnv-mob-button';

describe('mnv-mob-button', () => {
  it('should build', () => {
    expect(new MnvMobButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvMobButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvMobButton],
        html: '<mnv-mob-button></mnv-mob-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
