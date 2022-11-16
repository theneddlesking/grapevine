const KnownElements = [
    new BoxElement("Box", [], [new SizeStyle(100, 100), new BackgroundColorStyle("red")]),
    new HeadingElement("Colorful Heading", [new TextContentProp("Heading")], [new ColorStyle("red")]),
    new HeadingElement("Bordered Heading", [new TextContentProp("Heading")], [new NativeStyle("Font Size", "2rem"), new NativeStyle("Border", "3px solid black"), new NativeStyle("Padding", "10px"), new NativeStyle("Background Color", "skyblue")]),
];