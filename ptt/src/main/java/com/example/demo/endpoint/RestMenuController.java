package com.example.demo.endpoint;

import com.example.demo.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin("*")
public class RestMenuController {

    @Autowired
    private MenuService menuService;



    @GetMapping("/list")
    public List<Menu> getList() {

        return menuService.getList();

    }



}
