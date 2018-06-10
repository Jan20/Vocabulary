export class Entry {

    ///////////////
    // Variables //
    ///////////////
    private entryId: string
    private native: string
    private foreign: string
    private score: number

    /////////////////
    // Constructor //
    /////////////////
    public constructor(native: string, foreign: string, score: number) {

        this.native = native
        this.foreign = foreign
        this.score = score

    }

    /////////////
    // Getters //
    /////////////
    public getEntryId(): string {

        return this.entryId

    }

    public getNative(): string {

        return this.native

    }

    public getForeign(): string {

        return this.foreign

    }

    public getScore(): number {

        return this.score

    }

    /////////////
    // Setters //
    /////////////
    public setEntryId(entryId: string): void {

        this.entryId = entryId

    }

    public setNative(native: string): void {

        this.native = native

    }

    public setForeign(foreign: string): void {

        this.foreign = foreign

    }

    public setScore(score: number): void {

        this.score = score

    }

}
