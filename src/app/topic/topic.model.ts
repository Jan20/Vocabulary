export class Topic {

    ///////////////
    // Variables //
    ///////////////
    private language: string;
    private stage: string;
    private name: string;

    /////////////////
    // Constructor //
    /////////////////
    public constructor(language: string, stage: string, name: string) {

        this.language = language;
        this.stage = stage;
        this.name = name;

    }

    /////////////
    // Getters //
    /////////////
    public getLanguage(): string {

        return this.language;

    }

    public getStage(): string {

        return this.stage;

    }

    public getName(): string {

        return this.name;

    }

    /////////////
    // Setters //
    /////////////
    public setLanguage(language: string): void {

        this.language = language;

    }

    public setStage(stage: string): void {

        this.stage = stage;

    }

    public setName(name: string): void {

        this.name = name;

    }

}
