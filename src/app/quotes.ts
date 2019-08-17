export class Quotes {
     showDetails: boolean;
     constructor(public id:number, public name:string , public quotes:string, public author:string, public votes:number, public dateEnterd:Date){
        this.showDetails = false;
     }
}
