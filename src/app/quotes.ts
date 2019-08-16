export class Quotes {
     showDetails: boolean;
     constructor(public name:string , public quote:string, public author:string, public votes:number, public dateEnterd:Date){
        this.showDetails = false;
     }
}
