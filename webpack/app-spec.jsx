import FermentablesFrame from "./components/frame/fermentables-frame";


describe('webpack/app', () => {
  it('has a fermentables frame', function () {
    this.wrapper = this.render();
    expect(this.wrapper.find(FermentablesFrame)).toBeTruthy();
  });
});