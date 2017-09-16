export class Entry {

    ///////////////
    // Variables //
    ///////////////
    private language: string;
    private stage: string;
    private topic: string;
    private native: string;
    private foreign: string;
    private score: number;

    /////////////////
    // Constructor //
    /////////////////
    public constructor(language: string, stage: string, topic: string, native: string, foreign: string, score: number) {

        this.language = language;
        this.stage = stage;
        this.topic = topic;
        this.native = native;
        this.foreign = foreign;
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

    public getTopic(): string {

        return this.topic;

    }

    public getNative(): string {

        return this.native;

    }

    public getForeign(): string {

        return this.foreign;

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

    public setTopic(topic: string): void {

        this.topic = topic;

    }

    public setNative(native: string): void {

        this.native = native;

    }

    public setForeign(foreign: string): void {

        this.foreign = foreign;

    }

    public setScore(score: number): void {

        this.score = score;

    }

}
