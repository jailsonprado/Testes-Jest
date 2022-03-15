import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart'

const createSut = () => {
    const discountMock = createDiscountMock();
    const sut = new ShoppingCart(discountMock);
    return {sut, discountMock}
}

const createDiscountMock = () => {
    class DiscountMock extends Discount {}
    return new DiscountMock();
}

const createCartItem = (name: string, price: number) => {
    class CartItemMock implements CartItem {
        constructor(public name: string, public price: number) {}
    }

    return new CartItemMock(name, price);
}

const createSutWithProducts = () => {
    const { sut, discountMock } = createSut()
    const cartItems1 =  createCartItem('camiseta', 40)
    const cartItems2 =  createCartItem('caneta', 1)
    sut.addItem(cartItems1)
    sut.addItem(cartItems2)
    return {sut, discountMock}
}

describe('ShoppingCart' ,() => {
    it('should be a empty car when product is added',() => {
        const { sut } = createSut()
        expect(sut.isEmpty()).toBe(true)
    })

    it('should have 2 cart items',() => {
        const { sut } = createSutWithProducts()
        expect(sut.items.length).toBe(2)
    })

    it('should total and totalWithDiscount',() => {
        const { sut } = createSutWithProducts()
        expect(sut.total()).toBe(41)
        expect(sut.totalWithDicount()).toBe(41)
    })

    it('should add products and clear',() => {
        const { sut } = createSutWithProducts()
        expect(sut.items.length).toBe(2);
        sut.clear()
        expect(sut.items.length).toBe(0);
        expect(sut.isEmpty()).toBe(true);
    })

    it('should add products and clear',() => {
        const { sut } = createSutWithProducts()
        expect(sut.items.length).toBe(2);
        sut.removeItem(1)
        expect(sut.items.length).toBe(1);
        sut.removeItem(0);
        expect(sut.isEmpty()).toBe(true);
    })
    
    it('should call discount.calculate(price) once when totalWithDiscount is called',() => {
        const { sut, discountMock} = createSutWithProducts()
        const discountMockSpy = jest.spyOn(discountMock, 'calculate')
        sut.totalWithDicount();
        expect(discountMockSpy).toHaveBeenCalledTimes(1)

    })
    
    it('should call discount.calculate(price) with total Price when totalWithDiscount is called',() => {
        const { sut, discountMock} = createSutWithProducts()
        const discountMockSpy = jest.spyOn(discountMock, 'calculate')
        sut.totalWithDicount();
        expect(discountMockSpy).toHaveBeenCalledWith(sut.total())

    })
})