import { Component, h, Element, Prop, Watch } from "@stencil/core";

@Component({
  tag: "of-typewriter",
  styleUrl: "typewriter.css",
})
export class TypewriterComponent {
  @Element() element: HTMLElement;
  @Prop() message: string;
  @Prop() speed;

  componentDidLoad() {
    this.writeMessage();
  }

  @Watch("message")
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
    return (
      <div>
        <slot />
      </div>
    );
  }
}
