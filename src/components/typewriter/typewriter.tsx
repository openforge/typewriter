import { Component, Element, Prop, Watch } from "@stencil/core";

@Component({
  tag: "of-typewriter"
})
export class TypewriterComponent {
  @Element() element: HTMLElement;
  @Prop() message: string;
  @Prop() speed: number = 50;
  @Prop() tag: string = 'p';

  private interval: number;
  private internalElement: HTMLElement;

  componentDidLoad() {
    this.writeMessage();
  }

  @Watch("message")
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
}
