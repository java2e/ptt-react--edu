

1.Primereact kullanmak için 

npm install primereact primeicons komutu calıstırmanız gerekmektedir.

Ayrıca index.js dosyasının en üstüne altta bulunan importları eklemeniz gerekmektedir.

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";  

2. Primereact flex kütüphanesi kullanmak için 

npm install primeflex --save komutunu calıstırınız. 

Ayrıca aşağıdaki linki public içerisinde bulunan index.html içerisinde header kısmına ekleyiniz.

<link rel="stylesheet" href="https://unpkg.com/primeflex@^3/primeflex.css">



NOT:!!!!!

Bu projede bulunan package.json içerisinde yukardaki npm ile ekleyeceğiniz bütün kütüphaneler eklidir. Projeyi indirip sadece aşağıdaki komutu çalıştırmanız durumunda 
bütün kütüphaneleri indirecektir.

  npm install
