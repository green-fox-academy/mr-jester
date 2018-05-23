'use strict';
export class blogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor (title:string) {
        this.title = title;
        if (title === 'Lorem Ipsum'){
            this.authorName = 'John Doe';
            this.publicationDate= '2000.05.04'
            this.text = 'Lorem ipsum dolor sit amet'
        }
        else if (title ==='Wait but why') {
            this.authorName = 'Tim Urban';
            this.publicationDate = '2010.10.10';
            this.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.'
        }
        else if (title === 'One Engineer Is Trying to Get IBM to Reckon With Trump'){
            this.authorName = 'William Turton';
            this.publicationDate = '2017.03.28';
            this.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'
        }
    }
}
let Lorem = new blogPost ('Lorem Ipsum');
let Wait = new blogPost ('Wait but why');
let oneEngneer = new blogPost ('One Engineer Is Trying to Get IBM to Reckon With Trump');
console.log (Wait);