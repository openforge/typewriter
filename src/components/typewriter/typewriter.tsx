import { Component, h, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'of-typewriter',
  styleUrl: 'typewriter.css'
})
export class TypewriterComponent {

  @Element() element: HTMLElement;
  @Prop() message: string;
  @Prop() speed;

  componentDidLoad() {
    this.writeMessage();    
  }

  @Watch('message')
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
    return <h1 id="typing"></h1>;
  }
}
