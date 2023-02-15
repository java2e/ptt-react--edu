package com.example.demo.endpoint;


public class Menu {

    private Long id;

    private String menuAdi;

    private String description;

    private String imgUrl;

    private Long fiyat;

    public Menu(long id, String menuAdi, String description, String imgUrl, long fiyat) {
        this.id=id;
        this.menuAdi = menuAdi;
        this.description=description;
        this.imgUrl=imgUrl;
        this.fiyat=fiyat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMenuAdi() {
        return menuAdi;
    }

    public void setMenuAdi(String menuAdi) {
        this.menuAdi = menuAdi;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Long getFiyat() {
        return fiyat;
    }

    public void setFiyat(Long fiyat) {
        this.fiyat = fiyat;
    }
}
