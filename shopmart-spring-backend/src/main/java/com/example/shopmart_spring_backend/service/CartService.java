package com.example.shopmart_spring_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.shopmart_spring_backend.model.CartItem;
import com.example.shopmart_spring_backend.model.Product;

@Service
public class CartService {
    List<CartItem> cart = new ArrayList<>();

    // @Autowired
    // JdbcTemplate jsJdbcTemplate;

    public List<CartItem> getCart() {
        return cart;
    }
    public void addToCart(Product product) {

        boolean isProductInCart = false;

        for(CartItem item : cart) {
            if(item.getProduct().getId() == product.getId()) {
                item.setQty(item.getQty() + 1);

                isProductInCart = true;
            }

        }

        if(!isProductInCart) {
            cart.add(new CartItem(product, 1));
        }
    }
    
}
