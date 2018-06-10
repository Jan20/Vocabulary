export class Stage {

    ///////////////
    // Variables //
    ///////////////
    private stageId: string
    private language: string
    private name: string

    /////////////////
    // Constructor //
    /////////////////
    public constructor(language: string, name: string) {

        this.language = language
        this.name = name

    }

    /////////////
    // Getters //
    /////////////
    public getStageId(): string {

        return this.stageId

    }

    public getLanguage(): string {

        return this.language

    }

    public getName(): string {

        return this.name

    }

    /////////////
    // Setters //
    /////////////
    public setStageId(stageId: string): void {

        this.stageId = stageId

    }

    public setLanguage(language: string): void {

        this.language = language

    }

    public setName(name: string): void {

        this.name = name

    }

}
