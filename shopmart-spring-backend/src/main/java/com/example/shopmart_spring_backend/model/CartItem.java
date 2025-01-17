package com.example.shopmart_spring_backend.model;

public class CartItem {

    private Product product;
    private int qty;

    public CartItem() {

    }
    public CartItem(Product product, int qty) {
        this.product = product;
        this.qty = qty;
    }
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
    public int getQty() {
        return qty;
    }
    public void setQty(int qty) {
        this.qty = qty;
    }
 
    @Override
    public String toString() {
        return "CartItem [product=" + product + ", qty=" + qty + "]";
    }

    
    
}

// class Product {
//     private String name;
//     private double price;

// }
// class CartItem {

//     private Product product;
//     private int qty;
// }