export abstract class BlogElement {

    ///////////////
    // Variables //
    ///////////////
    private position: number;

    //////////////////
    // Constructors //
    //////////////////
    public constructor(position: number){

        this.position = position;
    
    }

    ///////////////
    // Functions //
    ///////////////

    /////////////
    // Getters //
    /////////////
    public getPosition(): number {

        return this.position;

    }

    /////////////
    // Setters //
    /////////////
    public setPosition(position: number): void {

        this.position = position;

    }

}