export class Language {

    ////////////////
    // Attributes //
    ////////////////
    public languageId: string
    public name: string

    /////////////////
    // Constructor //
    /////////////////
    public constructor(name: string) {

        this.name = name

    }

    /////////////
    // Getters //
    /////////////
    public getLanguageId(): string {

        return this.languageId

    }

    public getName(): string {

        return this.name

    }

    /////////////
    // Setters //
    /////////////
    public setLanguageId(languageId: string): void {

        this.languageId = languageId

    }

    public setName(name: string): void {

        this.name = name

    }

}