import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum (): number {
        return [...this._items].reduce((acc: any, el: any) => {
            acc += el.price
            return acc
          }, 0)
    }

    sumBonus (discount: number): number {
        return this.sum() * ((100 - discount) * 0.01)

    }

    delete (id : number): void{
        const index: number = this._items.findIndex(el => el.id === id)
        this._items.splice(index, 1)
    }
}