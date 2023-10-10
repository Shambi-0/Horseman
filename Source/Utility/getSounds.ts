const Sounds = {
    Slide: {
        SwooshSlide1a: 14966563727,
        SwooshSlide1b: 14966563633,
        SwooshSlide2: 14966563535,
        SwooshSlide3: 14966563368,
        SwooshSlide4: 14966563451,
        SwooshSlide5: 14966563290,
        
        OpenOrEnable1: 14966564076,
        OpenOrEnable2: 14966564126,
        OpenOrEnable3: 14966564186,
        OpenOrEnable4a: 14966564005,
        OpenOrEnable4b: 14966563917,
        OpenOrEnable5: 14966563815,
        
        Minimize1: 14966564394,
        Minimize2: 14966564325,
        Minimize3: 14966564263,
        Minimize4: 14966564889,

        Maximize1: 14966564637,
        Maximize2: 14966564547,
        Maximize3: 14966564504,
        Maximize4: 14966564446,

        LittleSwoosh1a: 14966565335,
        LittleSwoosh1b: 14966565203,
        LittleSwoosh2a: 14966565124,
        LittleSwoosh2b: 14966565042,
        LittleSwoosh3: 14966564956,
        LittleSwoosh4: 14966564812,
        LittleSwoosh5: 14966564733,

        CloseOrDisable1: 14966565635,
        CloseOrDisable2: 14966565579,
        CloseOrDisable3: 14966565511,
        CloseOrDisable4: 14966565414,
        CloseOrDisable5: 14966565264
    },
    Extra: {
        CameraSnapshot: 14966662545,
        HandleDragTick: 14966662616,
        LittleNoise: 14966662690
    },
    Alerts: {
        Success1: 14966675648,
        Success2: 14966675557,
        Success3: 14966675453,
        Success4: 14966675359,
        Success5: 14966675250,
        Success6: 14966675114,
        Success7a: 14966674477,
        Success7b: 14966674266,
        Success8: 14966674363,
        Success9: 14966674167,
        Success10: 14966674023,
        Success11a: 14966674839,
        Success11b: 14966674717,
        Success12: 14966674581,
        
        Error1: 14966677876,
        Error2: 14966677781,
        Error3: 14966677704,
        Error4: 14966677635,
        Error5: 14966677561,

        SciFiNotification1: 14966676242,
        SciFiNotification2: 14966675797,
        SciFiNotification3: 14966675797,

        Popup1: 14966676524,
        Popup2: 14966676443,
        Popup3: 14966676382,
        Popup4a: 14966676320,
        Popup4b: 14966676147,
        
        GenericNotification1: 14966677496,
        GenericNotification2: 14966677393,
        GenericNotification3: 14966677293,
        GenericNotification4: 14966677214,
        GenericNotification5: 14966677137,
        GenericNotification6: 14966677048,
        GenericNotification7: 14966676974,
        GenericNotification8: 14966676916,
        GenericNotification9: 14966676855,
        GenericNotification10a: 14966676855,
        GenericNotification10b: 14966676673,
        GenericNotification11: 14966676598
    },
    Buttons: {
        ClickAndSlide: 14967480035,

        GenericButton1: 14967479211,
        GenericButton2: 14967478873,
        GenericButton3: 14967478815,
        GenericButton4: 14967478934,
        GenericButton5: 14967478735,
        GenericButton6: 14967478627,
        GenericButton7: 14967478494,
        GenericButton8: 14967478396,
        GenericButton9: 14967478557,
        GenericButton10: 14967478339,
        GenericButton11: 14967478270,
        GenericButton12: 14967478156,
        GenericButton13: 14967477866,
        GenericButton14: 14967477983,
        GenericButton15: 14967477770,

        ClickyButton1a: 14967479964,
        ClickyButton1b: 14967479914,
        ClickyButton2: 14967479859,
        ClickyButton3a: 14967479812,
        ClickyButton3b: 14967479751,
        ClickyButton4: 14967479625,
        ClickyButton5a: 14967479554,
        ClickyButton5b: 14967479689,
        ClickyButton6: 14967479456,
        ClickyButton7: 14967479406,
        ClickyButton8: 14967479357,
        ClickyButton9a: 14967479286,
        ClickyButton9b: 14967479006,
        ClickyButton10a: 14967479065,
        ClickyButton10b: 14967479133,
        
        SnappyButton1: 14967477716,
        SnappyButton2: 14967477923,
        SnappyButton3: 14967477811,
        SnappyButton4: 14967477640,
        SnappyButton5: 14967478068
    }
};

export default function getSounds<Name extends keyof (typeof Sounds)>(Package: Name): (typeof Sounds)[Name] {
    return Sounds[Package];
};