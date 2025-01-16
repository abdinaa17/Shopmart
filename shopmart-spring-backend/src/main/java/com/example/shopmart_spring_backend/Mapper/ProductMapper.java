package com.example.shopmart_spring_backend.Mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.example.shopmart_spring_backend.model.Product;

public class ProductMapper implements RowMapper<Product>{

  @Override
  public Product mapRow(ResultSet rs, int rowNum) throws SQLException {

    return new Product(rs.getLong("id"), rs.getString("name"), 
    rs.getString("description"), rs.getString("category"), rs.getDouble("price"));
  }

}
