package com.petpia.backend_petpia.service;

import com.petpia.backend_petpia.entity.Order;
import com.petpia.backend_petpia.entity.OrderItem;
import com.petpia.backend_petpia.repository.OrderRepository;
import com.petpia.backend_petpia.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long orderId) {
        return orderRepository.findById(orderId);
    }

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public Order createOrder(Order order) {
        order.setOrderDate(LocalDateTime.now());
        Set<OrderItem> orderItems = order.getOrderItems();
        order.setOrderItems(null);
        Order savedOrder = orderRepository.save(order);
        for (OrderItem orderItem : orderItems) {
            orderItem.setOrder(savedOrder);
            orderItemRepository.save(orderItem);
        }
        savedOrder.setOrderItems(orderItems);
        return orderRepository.save(savedOrder);
    }

    public Optional<Order> updateOrder(Long orderId, Order orderDetails) {
        return orderRepository.findById(orderId)
                .map(order -> {
                    order.setStatus(orderDetails.getStatus());
                    return orderRepository.save(order);
                });
    }

    public boolean deleteOrder(Long orderId) {
        return orderRepository.findById(orderId)
                .map(order -> {
                    orderRepository.delete(order);
                    return true;
                }).orElse(false);
    }
}
