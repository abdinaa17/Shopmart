package com.example.shopmart_spring_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.shopmart_spring_backend.model.CartItem;
import com.example.shopmart_spring_backend.model.Product;
import com.example.shopmart_spring_backend.service.CartService;

@RestController
@RequestMapping("/api/v1/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;
    
    @GetMapping
    public List<CartItem> getCart() {
        return cartService.getCart();
    }

    @PostMapping
    public ResponseEntity<?> addToCart(@RequestBody Product product) {

        cartService.addToCart(product);
        return ResponseEntity.ok("");
    }
}
