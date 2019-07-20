import { TestWindow } from '@stencil/core/testing';
import { MnvIconbutton } from './mnv-iconbutton';

describe('mnv-iconbutton', () => {
  it('should build', () => {
    expect(new MnvIconbutton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMnvIconbuttonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MnvIconbutton],
        html: '<mnv-iconbutton></mnv-iconbutton>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
