package com.vietnamfoodship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vietnamfoodship.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
    
}