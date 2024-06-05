package com.petpia.backend_petpia.repository;

import com.petpia.backend_petpia.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
