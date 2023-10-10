namespace Navigation {
	export const Dark = new Map<Enum.KeyCode | Enum.UserInputType, string>([
		// Alphabet
		[ Enum.KeyCode.A, "rbxassetid://11323358094" ],
		[ Enum.KeyCode.B, "rbxassetid://11323354977" ],
		[ Enum.KeyCode.C, "rbxassetid://11323354558" ],
		[ Enum.KeyCode.D, "rbxassetid://11323354156" ],
		[ Enum.KeyCode.E, "rbxassetid://11323354062" ],
		[ Enum.KeyCode.F, "rbxassetid://11323353484" ],
		[ Enum.KeyCode.G, "rbxassetid://11323350176" ],
		[ Enum.KeyCode.H, "rbxassetid://11323350125" ],
		[ Enum.KeyCode.I, "rbxassetid://11326787047" ],
		[ Enum.KeyCode.J, "rbxassetid://11323349946" ],
		[ Enum.KeyCode.K, "rbxassetid://11323349845" ],
		[ Enum.KeyCode.L, "rbxassetid://11323349728" ],
		[ Enum.KeyCode.M, "rbxassetid://11323349645" ],
		[ Enum.KeyCode.N, "rbxassetid://11323348931" ],
		[ Enum.KeyCode.O, "rbxassetid://11323348756" ],
		[ Enum.KeyCode.P, "rbxassetid://11323346471" ],
		[ Enum.KeyCode.Q, "rbxassetid://11323346013" ],
		[ Enum.KeyCode.R, "rbxassetid://11323345733" ],
		[ Enum.KeyCode.S, "rbxassetid://11323345666" ],
		[ Enum.KeyCode.T, "rbxassetid://11323345287" ],
		[ Enum.KeyCode.U, "rbxassetid://11323344966" ],
		[ Enum.KeyCode.V, "rbxassetid://11323344900" ],
		[ Enum.KeyCode.W, "rbxassetid://11323344726" ],
		[ Enum.KeyCode.X, "rbxassetid://11323344584" ],
		[ Enum.KeyCode.Y, "rbxassetid://11323344525" ],
		[ Enum.KeyCode.Z, "rbxassetid://11323344435" ],

		// Numeric
		[ Enum.KeyCode.One,   "rbxassetid://11323359733" ],
		[ Enum.KeyCode.Two,   "rbxassetid://11323359144" ],
		[ Enum.KeyCode.Three, "rbxassetid://11323359084" ],
		[ Enum.KeyCode.Four,  "rbxassetid://11323359000" ],
		[ Enum.KeyCode.Five,  "rbxassetid://11323358949" ],
		[ Enum.KeyCode.Six,   "rbxassetid://11323358852" ],
		[ Enum.KeyCode.Seven, "rbxassetid://11323358728" ],
		[ Enum.KeyCode.Eight, "rbxassetid://11323358621" ],
		[ Enum.KeyCode.Nine,  "rbxassetid://11323358515" ],
		[ Enum.KeyCode.Zero,  "rbxassetid://11323359842" ],

		// Keypad
		[ Enum.KeyCode.KeypadOne,   "rbxassetid://11323359733" ],
		[ Enum.KeyCode.KeypadTwo,   "rbxassetid://11323359144" ],
		[ Enum.KeyCode.KeypadThree, "rbxassetid://11323359084" ],
		[ Enum.KeyCode.KeypadFour,  "rbxassetid://11323359000" ],
		[ Enum.KeyCode.KeypadFive,  "rbxassetid://11323358949" ],
		[ Enum.KeyCode.KeypadSix,   "rbxassetid://11323358852" ],
		[ Enum.KeyCode.KeypadSeven, "rbxassetid://11323358728" ],
		[ Enum.KeyCode.KeypadEight, "rbxassetid://11323358621" ],
		[ Enum.KeyCode.KeypadNine,  "rbxassetid://11323358515" ],
		[ Enum.KeyCode.KeypadZero,  "rbxassetid://11323359842" ],

		// Keypad Special
		[ Enum.KeyCode.KeypadPlus,     "rbxassetid://11323346164" ],
		[ Enum.KeyCode.KeypadMinus,    "rbxassetid://11323349348" ],
		[ Enum.KeyCode.KeypadDivide,   "rbxassetid://11323345435" ],
		[ Enum.KeyCode.KeypadMultiply, "rbxassetid://11323355052" ],
		[ Enum.KeyCode.KeypadEnter,    "rbxassetid://11323353687" ],
		[ Enum.KeyCode.KeypadPeriod,   "" ], // TODO
		[ Enum.KeyCode.KeypadEquals,   "" ], // TODO
		[ Enum.KeyCode.NumLock,        "rbxassetid://11323348818" ],

		// Arrows
		[ Enum.KeyCode.Left,  "rbxassetid://11323355450" ],
		[ Enum.KeyCode.Right, "rbxassetid://11323355347" ],
		[ Enum.KeyCode.Up,    "rbxassetid://11323355179" ],
		[ Enum.KeyCode.Down,  "rbxassetid://11323355542" ],

		// Special
		[ Enum.KeyCode.LeftShift,    "rbxassetid://11323345550" ],
		[ Enum.KeyCode.RightShift,   "rbxassetid://11323345550" ],
		[ Enum.KeyCode.Space,        "rbxassetid://11323345377" ],
		[ Enum.KeyCode.Semicolon,    "rbxassetid://11323345611" ],
		[ Enum.KeyCode.Home,         "rbxassetid://11323350074" ],
		[ Enum.KeyCode.QuotedDouble, "rbxassetid://11323345832" ],
		[ Enum.KeyCode.Insert,       "rbxassetid://11323349996" ],
		[ Enum.KeyCode.Question,     "rbxassetid://11323345953" ],
		[ Enum.KeyCode.Tab,          "rbxassetid://11323345181" ],
		[ Enum.KeyCode.Print,        "rbxassetid://11323346066" ],
		[ Enum.KeyCode.Tilde,        "rbxassetid://11323345077" ],
		[ Enum.KeyCode.Slash,        "rbxassetid://11323345435" ],
		[ Enum.KeyCode.LeftAlt,      "rbxassetid://11323357996" ],
		[ Enum.KeyCode.RightAlt,     "rbxassetid://11323357996" ],
		[ Enum.KeyCode.Backspace,    "rbxassetid://11323354847" ],
		[ Enum.KeyCode.Delete,       "rbxassetid://11326787216" ],
		[ Enum.KeyCode.PageUp,       "rbxassetid://11323346371" ],
		[ Enum.KeyCode.PageDown,     "rbxassetid://11323346414" ],

		// F
		[ Enum.KeyCode.F1,  "rbxassetid://11323353394" ],
		[ Enum.KeyCode.F2,  "rbxassetid://11323353264" ],
		[ Enum.KeyCode.F3,  "rbxassetid://11323353177" ],
		[ Enum.KeyCode.F4,  "rbxassetid://11323353051" ],
		[ Enum.KeyCode.F5,  "rbxassetid://11323350934" ],
		[ Enum.KeyCode.F6,  "rbxassetid://11323350868" ],
		[ Enum.KeyCode.F7,  "rbxassetid://11323350752" ],
		[ Enum.KeyCode.F8,  "rbxassetid://11323350672" ],
		[ Enum.KeyCode.F9,  "rbxassetid://11323350586" ],
		[ Enum.KeyCode.F10, "rbxassetid://11323350443" ],
		[ Enum.KeyCode.F11, "rbxassetid://11323350331" ],
		[ Enum.KeyCode.F12, "rbxassetid://11323350246" ],


		// Additional
		[ Enum.UserInputType.MouseMovement, "rbxassetid://11323349041" ], // NONE
		[ Enum.UserInputType.MouseButton1,  "rbxassetid://11323349299" ], // LEFT
		[ Enum.UserInputType.MouseButton2,  "rbxassetid://11323349106" ], // RIGHT
		[ Enum.UserInputType.MouseButton3,  "rbxassetid://11323349184" ]  // MIDDLE
	]);

	export const Light = new Map<Enum.KeyCode | Enum.UserInputType, string>([
		// Alphabet
		[ Enum.KeyCode.A, "rbxassetid://11326812023" ],
		[ Enum.KeyCode.B, "rbxassetid://11326811185" ],
		[ Enum.KeyCode.C, "rbxassetid://11326810461" ],
		[ Enum.KeyCode.D, "rbxassetid://11326807500" ],
		[ Enum.KeyCode.E, "rbxassetid://11326807355" ],
		[ Enum.KeyCode.F, "rbxassetid://11326806486" ],
		[ Enum.KeyCode.G, "rbxassetid://11326805804" ],
		[ Enum.KeyCode.H, "rbxassetid://11326805675" ],
		[ Enum.KeyCode.I, "rbxassetid://11326813454" ],
		[ Enum.KeyCode.J, "rbxassetid://11326805316" ],
		[ Enum.KeyCode.K, "rbxassetid://11326805164" ],
		[ Enum.KeyCode.L, "rbxassetid://11326805040" ],
		[ Enum.KeyCode.M, "rbxassetid://11326804936" ],
		[ Enum.KeyCode.N, "rbxassetid://11326804020" ],
		[ Enum.KeyCode.O, "rbxassetid://11326803702" ],
		[ Enum.KeyCode.P, "rbxassetid://11326800376" ],
		[ Enum.KeyCode.Q, "rbxassetid://11326799606" ],
		[ Enum.KeyCode.R, "rbxassetid://11326799278" ],
		[ Enum.KeyCode.S, "rbxassetid://11326799023" ],
		[ Enum.KeyCode.T, "rbxassetid://11326798053" ],
		[ Enum.KeyCode.U, "rbxassetid://11326797620" ],
		[ Enum.KeyCode.V, "rbxassetid://11326797472" ],
		[ Enum.KeyCode.W, "rbxassetid://11326797349" ],
		[ Enum.KeyCode.X, "rbxassetid://11326797135" ],
		[ Enum.KeyCode.Y, "rbxassetid://11326797016" ],
		[ Enum.KeyCode.Z, "rbxassetid://11326796826" ],

		// Numeric
		[ Enum.KeyCode.One,   "rbxassetid://11328765239" ], // TODO
		[ Enum.KeyCode.Two,   "rbxassetid://11328765143" ], // TODO
		[ Enum.KeyCode.Three, "rbxassetid://11326817976" ],
		[ Enum.KeyCode.Four,  "rbxassetid://11326817890" ],
		[ Enum.KeyCode.Five,  "rbxassetid://11326817832" ],
		[ Enum.KeyCode.Six,   "rbxassetid://11326817759" ],
		[ Enum.KeyCode.Seven, "rbxassetid://11326817654" ],
		[ Enum.KeyCode.Eight, "rbxassetid://11326817548" ],
		[ Enum.KeyCode.Nine,  "rbxassetid://11326817378" ],
		[ Enum.KeyCode.Zero,  "rbxassetid://11328765382" ],

		// Keypad
		[ Enum.KeyCode.KeypadOne,   "rbxassetid://11328765239" ], // TODO
		[ Enum.KeyCode.KeypadTwo,   "rbxassetid://11328765143" ], // TODO
		[ Enum.KeyCode.KeypadThree, "rbxassetid://11326817976" ],
		[ Enum.KeyCode.KeypadFour,  "rbxassetid://11326817890" ],
		[ Enum.KeyCode.KeypadFive,  "rbxassetid://11326817832" ],
		[ Enum.KeyCode.KeypadSix,   "rbxassetid://11326817759" ],
		[ Enum.KeyCode.KeypadSeven, "rbxassetid://11326817654" ],
		[ Enum.KeyCode.KeypadEight, "rbxassetid://11326817548" ],
		[ Enum.KeyCode.KeypadNine,  "rbxassetid://11326817378" ],
		[ Enum.KeyCode.KeypadZero,  "rbxassetid://11328765382" ], // TODO

		// Keypad Special
		[ Enum.KeyCode.KeypadPlus,     "rbxassetid://11326799873" ], // TODO
		[ Enum.KeyCode.KeypadMinus,    "rbxassetid://11326804622" ], // TODO
		[ Enum.KeyCode.KeypadDivide,   "rbxassetid://11326798265" ], // TODO
		[ Enum.KeyCode.KeypadMultiply, "rbxassetid://11326811314" ], // TODO
		[ Enum.KeyCode.KeypadEnter,    "rbxassetid://11326806857" ], // TODO
		[ Enum.KeyCode.KeypadPeriod,   "" ], // TODO
		[ Enum.KeyCode.KeypadEquals,   "" ], // TODO
		[ Enum.KeyCode.NumLock,        "rbxassetid://11326803891" ], // TODO

		// Arrows
		[ Enum.KeyCode.Left,  "rbxassetid://11326811662" ],
		[ Enum.KeyCode.Right, "rbxassetid://11326811540" ],
		[ Enum.KeyCode.Up,    "rbxassetid://11326811423" ],
		[ Enum.KeyCode.Down,  "rbxassetid://11326811769" ],

		// Special
		[ Enum.KeyCode.LeftShift,    "rbxassetid://11326798591" ], // TODO
		[ Enum.KeyCode.RightShift,   "rbxassetid://11326798591" ], // TODO
		[ Enum.KeyCode.Space,        "rbxassetid://11326798163" ], // TODO
		[ Enum.KeyCode.Semicolon,    "rbxassetid://11326798841" ], // TODO
		[ Enum.KeyCode.Home,         "rbxassetid://11326805582" ], // TODO
		[ Enum.KeyCode.QuotedDouble, "rbxassetid://11326799395" ], // TODO
		[ Enum.KeyCode.Insert,       "rbxassetid://11326805427" ], // TODO
		[ Enum.KeyCode.Question,     "rbxassetid://11326799494" ], // TODO
		[ Enum.KeyCode.Tab,          "rbxassetid://11326797951" ], // TODO
		[ Enum.KeyCode.Print,        "rbxassetid://11326799743" ], // TODO
		[ Enum.KeyCode.Tilde,        "rbxassetid://11326797807" ], // TODO
		[ Enum.KeyCode.Slash,        "rbxassetid://11326798265" ], // TODO
		[ Enum.KeyCode.LeftAlt,      "rbxassetid://11326811882" ],
		[ Enum.KeyCode.RightAlt,     "rbxassetid://11326811882" ],
		[ Enum.KeyCode.Backspace,    "rbxassetid://11326810945" ], // TODO
		[ Enum.KeyCode.Delete,       "rbxassetid://11326816980" ],
		[ Enum.KeyCode.PageUp,       "rbxassetid://11326800123" ], // TODO
		[ Enum.KeyCode.PageDown,     "rbxassetid://11326800244" ], // TODO

		// F
		[ Enum.KeyCode.F1,  "rbxassetid://11326816850" ],
		[ Enum.KeyCode.F2,  "rbxassetid://11326816756" ],
		[ Enum.KeyCode.F3,  "rbxassetid://11326816647" ],
		[ Enum.KeyCode.F4,  "rbxassetid://11326814364" ],
		[ Enum.KeyCode.F5,  "rbxassetid://11326814289" ],
		[ Enum.KeyCode.F6,  "rbxassetid://11326814208" ],
		[ Enum.KeyCode.F7,  "rbxassetid://11326814105" ],
		[ Enum.KeyCode.F8,  "rbxassetid://11326813981" ],
		[ Enum.KeyCode.F9,  "rbxassetid://11326813861" ],
		[ Enum.KeyCode.F10, "rbxassetid://11326813758" ],
		[ Enum.KeyCode.F11, "rbxassetid://11326813663" ],
		[ Enum.KeyCode.F12, "rbxassetid://11326813577" ],


		// Additional
		[ Enum.UserInputType.MouseMovement, "rbxassetid://11323349041" ], // NONE
		[ Enum.UserInputType.MouseButton1,  "rbxassetid://11323349299" ], // LEFT
		[ Enum.UserInputType.MouseButton2,  "rbxassetid://11323349106" ], // RIGHT
		[ Enum.UserInputType.MouseButton3,  "rbxassetid://11323349184" ]  // MIDDLE
	]);
};

export = Navigation;