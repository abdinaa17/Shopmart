package com.example.shopmart_spring_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shopmart_spring_backend.model.Product;
import com.example.shopmart_spring_backend.service.ProductService;

@RestController
@RequestMapping("/api/v1/products")

public class ProductController {
    @Autowired
    ProductService productService;
   
    
    @GetMapping
    public List<Product> getProducts() {

        return productService.getProducts();

    }
}




