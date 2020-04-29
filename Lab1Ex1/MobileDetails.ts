import {SmartPhone} from './SmartPhone'
import {BasicPhone} from './BasicPhone'
import {Mobile} from './Mobile'
class MobileDetails{
    mobiles: Mobile[] = [
        new SmartPhone(1,'OnePlus',30000,'Android'),
        new BasicPhone(1,'Nokia',3000,'FeaturePhone')
    ]

    printMobiles():void{
        for(let i=0;i<this.mobiles.length;i++){
            this.mobiles[i].printMobileDetail();
        }
    }
    }
    let obj = new MobileDetails()
    obj.printMobiles();
    