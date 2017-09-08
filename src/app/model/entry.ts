import { BlogElement } from './../model/blog-element';

export class Entry {

    ///////////////
    // Variables //
    ///////////////
    private stage: string;
    private topic: string;
    private native: string;
    private foreign: string;
    private score: number;

    /////////////////
    // Constructor //
    /////////////////
    public constructor() {


    }

    /////////////
    // Getters //
    /////////////
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
