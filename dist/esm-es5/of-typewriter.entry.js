import { r as registerInstance, g as getElement } from './index-038cf8d9.js';
var TypewriterComponent = /** @class */ (function () {
    function TypewriterComponent(hostRef) {
        registerInstance(this, hostRef);
        this.speed = 50;
        this.tag = 'p';
    }
    TypewriterComponent.prototype.componentDidLoad = function () {
        this.writeMessage();
    };
    TypewriterComponent.prototype.messageHandler = function () {
        this.writeMessage();
    };
    TypewriterComponent.prototype.writeMessage = function () {
        var _this = this;
        if (this.internalElement) {
            document.getElementById('of-typewriter').remove();
        }
        this.internalElement = document.createElement(this.tag);
        this.internalElement.setAttribute('id', 'of-typewriter');
        this.internalElement.addEventListener('click', this.completeText.bind(this));
        this.element.appendChild(this.internalElement);
        var i = 0;
        this.interval = setInterval(function () {
            if (i >= _this.message.length) {
                clearInterval(_this.interval);
            }
            _this.internalElement.textContent += _this.message.charAt(i);
            i++;
        }, this.speed);
    };
    TypewriterComponent.prototype.completeText = function () {
        this.internalElement.textContent = this.message;
        clearInterval(this.interval);
    };
    Object.defineProperty(TypewriterComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypewriterComponent, "watchers", {
        get: function () {
            return {
                "message": ["messageHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return TypewriterComponent;
}());
export { TypewriterComponent as of_typewriter };
