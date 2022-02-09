import { PricingService } from './pricingService'

export class PriceDatabase implements PricingService {
    priceForItem(itemId: number): number {
        try {
            // TODO Database stuff
            return 10
        } catch (error){
            // TODO or something IDK
        }
        throw new Error
    }
}