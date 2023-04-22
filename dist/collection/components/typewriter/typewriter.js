import { Component, Element, Prop, Watch } from "@stencil/core";
export class TypewriterComponent {
    constructor() {
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
    static get is() { return "of-typewriter"; }
    static get properties() { return {
        "message": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "message",
            "reflect": false
        },
        "speed": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "speed",
            "reflect": false,
            "defaultValue": "50"
        },
        "tag": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "tag",
            "reflect": false,
            "defaultValue": "'p'"
        }
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "message",
            "methodName": "messageHandler"
        }]; }
}
