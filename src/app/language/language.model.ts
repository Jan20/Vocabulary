export class Language {

    ////////////////
    // Attributes //
    ////////////////
    private name: string;

    /////////////////
    // Constructor //
    /////////////////
    public constructor(name: string) {

        this.name = name;

    }

    /////////////
    // Getters //
    /////////////
    public getName(): string {

        return this.name;

    };

    /////////////
    // Setters //
    /////////////
    public setName(name: string): void {

        this.name = name;

    }

}