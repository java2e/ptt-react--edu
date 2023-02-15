package com.example.demo.service;

import com.example.demo.endpoint.Menu;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class MenuService {

    public List<Menu> getList() {


        List<Menu> liste =new ArrayList<>();

        Menu menu = new Menu(1L,"Adana Kebap","Adana Kebabıdır","adanakebap.jpg",90l);
        liste.add(menu);
        menu = new Menu(2L,"Döner Kebap","Adana Kebabıdır","hamburger.jpg",90l);
        liste.add(menu);
        menu = new Menu(3L,"Hamberger Kebap","Adana Kebabıdır","hamburger.jpg",90l);
        liste.add(menu);
        menu = new Menu(4L,"Adana Kebap","Adana Kebabıdır","adanakebap.jpg",90l);
        liste.add(menu);

        return liste;
    }
}
