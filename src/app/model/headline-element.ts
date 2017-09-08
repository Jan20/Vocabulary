import { BlogElement } from './blog-element';

export class HeadlineElement extends BlogElement {

    ///////////////
    // Variables //
    ///////////////
    private text: string;

    ///////////////
    // Functions //
    ///////////////

    //////////////////
    // Constructors //
    //////////////////
    public constructor(text: string){

        super(0);
        this.setText(text);

    }

    ////////////
    // Getter //
    ////////////
    public getText(): string{
    
        return this.text;
        
    }

    ////////////
    // Setter //
    ////////////
    public setText(text: string): void {

        this.text = text;

    }

}