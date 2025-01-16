package com.example.shopmart_spring_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.shopmart_spring_backend.Mapper.ProductMapper;
import com.example.shopmart_spring_backend.model.Product;

@Service
public class ProductService {
   @Autowired
   JdbcTemplate jdbcTemplate;
   
   

   public List<Product> getProducts() {

       String sql = "SELECT * FROM PRODUCT";
       return jdbcTemplate.query(sql, new ProductMapper()); 

   }



    public void addProduct(Product product) {
    
        String sql = "INSERT INTO PRODUCT (name, description, category, price) VALUES(?, ?, ?, ?)";
        
        jdbcTemplate.update(sql, product.getName(), product.getDescription(), product.getCategory(), product.getPrice());

    }

    public Optional<Product> getSingleProduct(Long id) {

        String sql = "SELECT * FROM PRODUCT WHERE id = ?";

        return jdbcTemplate.query(sql, new ProductMapper(), id).stream().findFirst();
    }
}
