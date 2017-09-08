import { BlogElement } from './blog-element';

export class TextElement extends BlogElement {

    ///////////////
    // Variables //
    ///////////////
    private text: string;

    //////////////////
    // Constructors //
    //////////////////
    public constructor(position: number, text: string) {

        super(position);
        this.text = text;

    }

    ///////////////
    // Functions //
    ///////////////

    /////////////
    // Getters //
    /////////////
    public getText(): string {

        return this.text;

    }

    /////////////
    // Setters //
    /////////////
    public setText(text: string): void {

        this.text = text;

    }

}