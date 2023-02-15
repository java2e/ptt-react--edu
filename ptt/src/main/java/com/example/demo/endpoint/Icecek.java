package com.example.demo.endpoint;

public class Icecek {

    private Long id;

    private String icecekAdi;

    private String description;

    private String imgUrl;

    private Long fiyat;

    public Icecek(long l, String icecekAdi, String description, String imgUrl, long fiyat) {

        this.id=id;
        this.icecekAdi = icecekAdi;
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

    public String getIcecekAdi() {
        return icecekAdi;
    }

    public void setIcecekAdi(String icecekAdi) {
        this.icecekAdi = icecekAdi;
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
