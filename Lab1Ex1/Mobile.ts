export class Mobile{
    mobileId:number;
    mobileName:string;
    mobileCost:number;
   
    constructor( mobileId:number, mobileName:string,mobileCost:number){
        this.mobileId=mobileId;
        this.mobileName=mobileName;
        this.mobileCost=mobileCost;

    }
    printMobileDetail():void{
        console.log(this.mobileId+" "+this.mobileName+" "+this.mobileCost);
        
    }

}