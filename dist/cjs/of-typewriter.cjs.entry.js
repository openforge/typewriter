'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-623dacd9.js');

const TypewriterComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.speed = 50;
        this.tag = 'p';
    }
    componentDidLoad() {
        this.writeMessage();
    }
    messageHandler() {
        this.writeMessage();
    }
    writeMessage() {
        if (this.internalElement) {
            document.getElementById('of-typewriter').remove();
        }
        this.internalElement = document.createElement(this.tag);
        this.internalElement.setAttribute('id', 'of-typewriter');
        this.internalElement.addEventListener('click', this.completeText.bind(this));
        this.element.appendChild(this.internalElement);
        let i = 0;
        this.interval = setInterval(() => {
            if (i >= this.message.length) {
                clearInterval(this.interval);
            }
            this.internalElement.textContent += this.message.charAt(i);
            i++;
        }, this.speed);
    }
    completeText() {
        this.internalElement.textContent = this.message;
        clearInterval(this.interval);
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "message": ["messageHandler"]
    }; }
};

exports.of_typewriter = TypewriterComponent;
