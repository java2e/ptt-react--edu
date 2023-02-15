package com.example.demo.service;


import com.example.demo.endpoint.Icecek;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IcecekService {


    public List<Icecek> getList() {

        List<Icecek> list = new ArrayList<>();

        Icecek icecek = new Icecek(1L,"Kola","Adana Kebabıdır","kola.png",30l);
        list.add(icecek);
        icecek = new Icecek(2L,"Ayran","Adana Kebabıdır","ayran.png",30l);
        list.add(icecek);
        icecek = new Icecek(3L,"Şalgam","Adana Kebabıdır","salgam.png",30l);
        list.add(icecek);

        return list;

    }


}
