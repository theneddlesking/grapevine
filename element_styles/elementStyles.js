class SizeStyle extends ElementStyle {
    constructor(width, height) {
        super({width, height});
    }

    apply(element) {
        element.style.width = this.styles.width + "px";
        element.style.height = this.styles.height + "px";
    }
}

class BackgroundColorStyle extends ElementStyle {
    constructor(color) {
        super({color});
    }

    apply(element) {
        element.style.backgroundColor = this.styles.color;
    }
}