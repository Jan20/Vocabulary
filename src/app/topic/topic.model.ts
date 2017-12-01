import { scan } from "rxjs/operator/scan";

export class Topic {

    ///////////////
    // Variables //
    ///////////////
    private language: string;
    private stage: string;
    private name: string;
    private score: number;

    /////////////////
    // Constructor //
    /////////////////
    public constructor(language: string, stage: string, name: string, score: number) {

        this.language = language;
        this.stage = stage;
        this.name = name;
        this.score = score;

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

    public getScore(): number {

        return this.score;

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

    public setScore(score: number): void {

        this.score = score;

    }

}
