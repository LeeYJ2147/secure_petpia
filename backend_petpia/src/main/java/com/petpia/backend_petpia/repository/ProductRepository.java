package com.petpia.backend_petpia.repository;

import com.petpia.backend_petpia.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
