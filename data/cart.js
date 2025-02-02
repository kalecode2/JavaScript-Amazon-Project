export const cart = [];

export function addToCart(productId) {
   // make add to cart button interactive.
	let matchingItem;
	cart.forEach((cartItem) => {
		if (productId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});
	
	if (matchingItem) {
		matchingItem.quantity += 1;
	} else {
		cart.push({
			productId: productId,
			quantity: 1
		});
	}
}