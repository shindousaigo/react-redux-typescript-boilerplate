export default class Events {
  static Ins
  static get Instance(): Events {
    return this.Ins || new Events
  }
  constructor() {
    Events.Ins = this
    console.log(addEventListener)
  }

  screenWidthSize = innerWidth < 480 ? 'xs' : 'other'

  winResizeHandler() {
    let wrh: any = this.winResizeHandler
    switch (this.screenWidthSize) {
      case 'xs':
        wrh.fn1 = () => {
          if (innerWidth > 480) {
            removeEventListener("resize", wrh.fn1)
          }
        }
        break;
      default:
        wrh.fn1 = () => {
          if (innerWidth < 480) {
            removeEventListener("resize", wrh.fn1)
          }
        }
        break;
    }
    addEventListener("resize", wrh.fn1)
    return this.screenWidthSize
  }
}