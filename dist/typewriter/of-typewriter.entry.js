import { r as registerInstance, h, g as getElement } from './index-0e71bd20.js';

const typewriterCss = ":host{display:block}";

const TypewriterComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.writeMessage();
    }
    messageHandler() {
        this.writeMessage();
    }
    writeMessage() {
        const divElement = this.element.children[0];
        const slotElement = divElement.children[0];
        slotElement.textContent = null;
        console.dir(this.element);
        let i = 0;
        const intertval = setInterval(() => {
            if (i >= this.message.length) {
                clearInterval(intertval);
            }
            slotElement.textContent += this.message.charAt(i);
            i++;
        }, this.speed);
    }
    render() {
        return (h("div", null, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "message": ["messageHandler"]
    }; }
};
TypewriterComponent.style = typewriterCss;

export { TypewriterComponent as of_typewriter };
