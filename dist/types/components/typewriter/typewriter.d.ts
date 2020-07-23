export declare class TypewriterComponent {
    element: HTMLElement;
    message: string;
    speed: number;
    tag: string;
    private interval;
    private internalElement;
    componentDidLoad(): void;
    messageHandler(): void;
    writeMessage(): void;
    completeText(): void;
}
