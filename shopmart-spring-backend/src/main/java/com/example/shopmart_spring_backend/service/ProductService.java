package com.example.shopmart_spring_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.shopmart_spring_backend.model.Product;

@Service
public class ProductService {
   @Autowired
   JdbcTemplate jdbcTemplate;
   
   

   public List<Product> getProducts() {

        String sql = "SELECT * FROM PRODUCT";

        return jdbcTemplate.query(sql, (rs, rowNum) ->{
            return new Product(rs.getLong("id"), rs.getString("name"), 
                rs.getString("description"), rs.getString("category"), rs.getDouble("price"));
        });

        

   }
}
