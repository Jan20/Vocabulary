import { BlogElement } from './../model/blog-element';

export class BlogEntry {

    ///////////////
    // Variables //
    ///////////////
    private elements: BlogElement[];
    private author: string = "";
    private topic: string = "";
    private title: string = "";
    private subtitle: string = "";

    //////////////////
    // Constructors //
    //////////////////
    public constructor(){

    
    }

    ///////////////
    // Functions //
    ///////////////

    /////////////
    // Getters //
    /////////////
    public getElements(): BlogElement[] {

        return this.elements;

    }

    public getAuthor() : string {

        return this.author;

    }

    public getTopic() : string {

        return this.topic;

    }
    
    public getTitle() : string {

        return this.title;

    }
    
    public getSubtitle() : string {

        return this.subtitle;

    }

    /////////////
    // Setters //
    /////////////
    public setPosition(elements: BlogElement[]): void {

        this.elements = elements;

    }

    public setAuthor(author: string): void {

        this.author = author;

    }

    public setTopic(topic: string): void {

        this.topic = topic;

    }

    public setTitle(title: string): void {

        this.title = title;

    }

    public setSubtitle(subtitle: string): void {

        this.subtitle = subtitle;

    }


}