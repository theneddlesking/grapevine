const KnownElements = [
    new BoxElement("Box", [], [new SizeStyle(100, 100), new BackgroundColorStyle("red")]),
    new HeadingElement("Heading", [new TextContentProp("Heading")], [new ColorStyle("red")]),
    new HeadingElement("Bordered Heading", [new TextContentProp("Heading")], [new NativeStyle("Border", "1px dashed black")]),
];