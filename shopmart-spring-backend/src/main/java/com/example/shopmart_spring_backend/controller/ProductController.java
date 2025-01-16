package com.example.shopmart_spring_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shopmart_spring_backend.model.Product;
import com.example.shopmart_spring_backend.service.ProductService;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin
public class ProductController {
    @Autowired
    ProductService productService;
   
    
    @GetMapping
    public List<Product> getProducts() {

        return productService.getProducts();

    }
    @PostMapping
    public void addProduct(@RequestBody Product product) {

        productService.addProduct(product);
    }
    @GetMapping("/{id}")
    public Optional<Product> getSingleProduct(@PathVariable Long id) {
        return productService.getSingleProduct(id);
    }
}




