package com.petpia.backend_petpia.controller;

import com.example.demo.entity.Cart;
import com.example.demo.entity.CartItem;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCartByUserId(@PathVariable Long userId) {
        Optional<Cart> cart = cartService.getCartByUserId(userId);
        return cart.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/{userId}/items")
    public ResponseEntity<Cart> addCartItem(@PathVariable Long userId, @Valid @RequestBody CartItem cartItem) {
        Cart updatedCart = cartService.addCartItem(userId, cartItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(updatedCart);
    }

    @PutMapping("/{userId}/items/{itemId}")
    public ResponseEntity<CartItem> updateCartItem(@PathVariable Long userId, @PathVariable Long itemId, @Valid @RequestBody CartItem cartItemDetails) {
        Optional<CartItem> updatedCartItem = cartService.updateCartItem(userId, itemId, cartItemDetails);
        return updatedCartItem.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{userId}/items/{itemId}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable Long userId, @PathVariable Long itemId) {
        boolean isDeleted = cartService.deleteCartItem(userId, itemId);
        return isDeleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{userId}/items")
    public ResponseEntity<Void> clearCart(@PathVariable Long userId) {
        boolean isCleared = cartService.clearCart(userId);
        return isCleared ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
