package com.petpia.backend_petpia.service;

import com.petpia.backend_petpia.entity.User;
import com.petpia.backend_petpia.entity.Cart;
import com.petpia.backend_petpia.entity.CartItem;
import com.petpia.backend_petpia.repository.CartRepository;
import com.petpia.backend_petpia.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    public Optional<Cart> getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public Cart addCartItem(Long userId, CartItem cartItem) {
        Optional<Cart> cartOpt = cartRepository.findByUserId(userId);
        Cart cart = cartOpt.orElseGet(() -> {
            Cart newCart = new Cart();
            newCart.setUser(new User());
            newCart.getUser().setId(userId);
            return cartRepository.save(newCart);
        });

        cartItem.setCart(cart);
        cartItemRepository.save(cartItem);

        Set<CartItem> cartItems = cart.getCartItems();
        cartItems.add(cartItem);
        cart.setCartItems(cartItems);

        return cartRepository.save(cart);
    }

    public Optional<CartItem> updateCartItem(Long userId, Long itemId, CartItem cartItemDetails) {
        return cartItemRepository.findById(itemId)
                .map(cartItem -> {
                    if (!cartItem.getCart().getUser().getId().equals(userId)) {
                        return null;
                    }
                    cartItem.setQuantity(cartItemDetails.getQuantity());
                    return cartItemRepository.save(cartItem);
                });
    }

    public boolean deleteCartItem(Long userId, Long itemId) {
        return cartItemRepository.findById(itemId)
                .map(cartItem -> {
                    if (!cartItem.getCart().getUser().getId().equals(userId)) {
                        return false;
                    }
                    cartItemRepository.delete(cartItem);
                    return true;
                }).orElse(false);
    }

    public boolean clearCart(Long userId) {
        return cartRepository.findByUserId(userId)
                .map(cart -> {
                    cartItemRepository.deleteAll(cart.getCartItems());
                    return true;
                }).orElse(false);
    }
}
