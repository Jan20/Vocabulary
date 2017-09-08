export class Task {

    ///////////////
    // Variables //
    ///////////////
    private topic: string;
    private text: string;

    /////////////////
    // Constructor //
    /////////////////
    public constructor() {


    }

    /////////////
    // Getters //
    /////////////
    public getTopic(): string {

        return this.topic;

    }

    public getText(): string {

        return this.text;

    }

    /////////////
    // Setters //
    /////////////
    public setTopic(topic: string): void {

        this.topic = topic;

    }

    public setText(text: string): void {

        this.text = text;

    }

}
