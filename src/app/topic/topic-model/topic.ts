export class Topic {

    ///////////////
    // Variables //
    ///////////////
    public topicId: string
    public name: string
    public score: number

    /////////////////
    // Constructor //
    /////////////////
    public constructor(name: string, score: number) {

        this.name = name
        this.score = score

    }

    /////////////
    // Getters //
    /////////////
    public getTopicId(): string {

        return this.topicId

    }

    public getName(): string {

        return this.name

    }

    public getScore(): number {

        return this.score

    }

    /////////////
    // Setters //
    /////////////
    public setTopicId(topicId: string): void {

        this.topicId = topicId

    }

    public setName(name: string): void {

        this.name = name

    }

    public setScore(score: number): void {

        this.score = score

    }

}
