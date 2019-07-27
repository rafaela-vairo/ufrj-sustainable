import { TestWindow } from '@stencil/core/testing';
import { MnvMobDrawer } from './mnv-mob-drawer';

describe('mnv-mob-drawer', () => {
  it('should build', () => {
    expect(new MnvMobDrawer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvMobDrawerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvMobDrawer],
        html: '<mnv-mob-drawer></mnv-mob-drawer>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
