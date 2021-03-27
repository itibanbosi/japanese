enum eureka_IO {
  Aﾎﾟｰﾄ,
  Bﾎﾟｰﾄ,
  Cﾎﾟｰﾄ,
}
enum eureka_tlp {
  Aﾎﾟｰﾄ,
  Bﾎﾟｰﾄ,
}
enum onoff {
  ON,
  OFF,
}

enum LED_onoff {
    No = 0,
    Slow =2000,
    Nomal =850,
    Fast =300,
}
enum LED_color {
    Red,
    オレンジ,
    き,
    みどり,
    水,
    Blue,
    むらさき,
    白,
}

//% color="#ff7b00" block="はじめの一歩　V0.90"
namespace natumi_blocks {

    //% blockId=eureka_buz_set 
    //% block=ﾕｰﾚｶIOﾎﾞｯｸｽで音をならす
    // group="1 初期設定"
    //% color="#ff3d03" 
    //% weight=59

    export function eureka_buz_set() {
    pins.analogSetPitchPin(AnalogPin.P8);
  }
  //% color="#ff7b00" weight=17 blockId=eureka_white block="単体_LED |%mode| |%pin|" group="1_たん体ＬＥＤ"
  export function eureka_white(port: eureka_IO, mode: onoff) {
    switch (port) {
      case eureka_IO.Aﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P0, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P0, 0);
        }
      case eureka_IO.Bﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P1, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P1, 0);
        }
      case eureka_IO.Cﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P2, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P2, 0);
        }
    }
  }

  //% color="#ff7b00" weight=17 blockId=eureka_white2 block="単体_LED　点めつは|%mode|　ﾎﾟｰﾄ|%pin|" group="1_たん体ＬＥＤ"
  export function eureka_white2(mode: LED_onoff ,port: eureka_IO ) {
    switch (port) {
      case eureka_IO.Aﾎﾟｰﾄ:
        pins.digitalWritePin(DigitalPin.P0, 1);
        basic.pause(mode);
        if (mode == 0){
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        basic.pause(mode);
        return
        }
/*
      case eureka_IO.Bﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P1, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P1, 0);
        }
      case eureka_IO.Cﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P2, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P2, 0);
        }
    }
*/
    }
}




    //% color="#858585" weight=54 blockId=eureka_fullcolor block="にじ色ＬＥＤ |%color|色で点めつは|%mode| ﾎﾟｰﾄ|%pin|" group="2_にじ色ＬＥＤ"
    export function eureka_fullcolor(color:LED_color, mode:LED_onoff, pin: eureka_tlp) {
    switch (color) {
        case LED_color.Red:
        pins.digitalWritePin(DigitalPin.P0, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        return
        }
        case LED_color.オレンジ:
        pins.digitalWritePin(DigitalPin.P0, 1);
        pins.analogWritePin(AnalogPin.P13, 240)
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
         return
        }
        case LED_color.き:
        pins.digitalWritePin(DigitalPin.P0, 1);
        pins.digitalWritePin(DigitalPin.P13, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        return
        }
            case LED_color.みどり:
        pins.digitalWritePin(DigitalPin.P13, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        return
        }
            case LED_color.水:
        pins.analogWritePin(AnalogPin.P0, 388)
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.analogWritePin(AnalogPin.P14, 767)
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
         basic.pause(mode);
        return
        }
            case LED_color.Blue:
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        return
        }
            case LED_color.むらさき:
        pins.analogWritePin(AnalogPin.P0, 338)
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        return
        }
            case LED_color.白:
        pins.digitalWritePin(DigitalPin.P0, 1);
        pins.digitalWritePin(DigitalPin.P13, 1);
        pins.digitalWritePin(DigitalPin.P14, 1);
        basic.pause(mode);
        if (mode ==0) {
            return
        } else {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.digitalWritePin(DigitalPin.P13, 0);
        pins.digitalWritePin(DigitalPin.P14, 0);
        basic.pause(mode);
        return
        }
      }
    }

    //% color="#4741f1" weight=53 blockId=eureka_tl_blue block="青 点とう|%mode| |%pin|" group="2_にじ色ＬＥＤ"
    export function eureka_tl_blue(mode: onoff, pin: eureka_tlp) {
    switch (pin) {
      case eureka_tlp.Aﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P14, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P14, 0);
        }
      case eureka_tlp.Bﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P16, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P16, 0);
        }
    }
  }
  //% color="#009A00" weight=52 blockId=eureka_tl_green block="みどり 点とう|%mode| |%pin|" group="2_にじ色ＬＥＤ"
  export function eureka_tl_green(mode: onoff, pin: eureka_tlp) {
    switch (pin) {
      case eureka_tlp.Aﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P13, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P13, 0);
        }
      case eureka_tlp.Bﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P15, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P15, 0);
        }
    }
  }
  //% color="#ff4940" weight=51 blockId=eureka_tl_red block="赤 点とう|%mode| |%pin|" group="2_にじ色ＬＥＤ"
  export function eureka_tl_red(mode: onoff, pin: eureka_tlp) {
    switch (pin) {
      case eureka_tlp.Aﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P0, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P0, 0);
        }
      case eureka_tlp.Bﾎﾟｰﾄ:
        if (mode == onoff.ON) {
          return pins.digitalWritePin(DigitalPin.P1, 1);
        } else {
          return pins.digitalWritePin(DigitalPin.P1, 0);
        }
    }
  }




  //% color="#1E90FF" weight=10 block="待ち時間（秒）|%second|" group="機能"
  //% second.min=0 second.max=10
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
    }
}
