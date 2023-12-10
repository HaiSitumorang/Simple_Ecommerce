export const currency = (price) =>{
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `IDR ${price}`
}