package com.example.demo.endpoint;


import com.example.demo.service.IcecekService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/icecek")
@CrossOrigin("*")
public class RestIcecekController {


    @Autowired
    private IcecekService icecekService;

    @GetMapping("/list")
    public List<Icecek> getList() {
            return icecekService.getList();
    }



}
