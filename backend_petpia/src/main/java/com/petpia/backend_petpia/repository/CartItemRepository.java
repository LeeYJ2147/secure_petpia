package com.petpia.backend_petpia.repository;

import com.petpia.backend_petpia.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
