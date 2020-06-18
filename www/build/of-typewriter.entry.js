import { r as registerInstance, h, g as getElement } from './index-35c357c7.js';

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
        this.element.firstChild.textContent = null;
        let i = 0;
        const intertval = setInterval(() => {
            if (i >= this.message.length) {
                clearInterval(intertval);
            }
            this.element.firstChild.textContent += this.message.charAt(i);
            i++;
        }, this.speed);
    }
    render() {
        return h("h1", { id: "typing" });
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "message": ["messageHandler"]
    }; }
};
TypewriterComponent.style = typewriterCss;

export { TypewriterComponent as of_typewriter };
