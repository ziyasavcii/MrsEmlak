const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('genel'));
app.use(express.static('node_modules'));

const data = [
    {id:1, oneCikanlar:true, isim:"İsakit premium", fiyat:"154000 $", tarih:"08.05.2024",konum:"İstanbul/Zeytinburnu",isitma:"Kombi" , binayasi:0 ,odasayi: "5+2",m2:450, iletisim:"0531 531 31 31" ,img: "https://prefabrikevim.com/wp-content/uploads/2017/04/ip714-2.jpg"},
    {id:2, oneCikanlar:false, isim:"Navas Center", fiyat:"257000 $",tarih:"07.06.2024",konum:"İstanbul/Şişli",isitma:"klima", binayasi:1 ,odasayi: "4+2",m2:410, iletisim:"0531 531 31 31",img:"https://www.kadinlarduysun.com/wp-content/uploads/2017/02/ruyada-guzel-ev-gormek.jpg"},
    {id:3, oneCikanlar:false, isim:"Çalhanoğlu İnşaat", fiyat:"250000 $", tarih:"15.12.2024",konum:"İstanbul/Beyoğlu",isitma:"kombi", binayasi:4 ,odasayi: "3+1",m2:340, iletisim:"0531 531 31 31", img:"https://www.hepsiemlak.com/emlak-yasam/wp-content/uploads/2018/03/dunyadan-en-guzel-ev-ornekleri-2.jpg"},
    {id:4, oneCikanlar:false, isim:"Mertens Villaları", fiyat:"240000 $", tarih:"14.09.2024",konum:"İstanbul/Kadıköy",isitma:"kombi", binayasi:4 ,odasayi: "2+1",m2:290, iletisim:"0531 531 31 31", img:"http://res.cloudinary.com/emlakjet/image/upload/v1652897481/p0lj16fwqghg6g0cirvo.png"},
    {id:5, oneCikanlar:false, isim:"Oliveira Port", fiyat:"260000 $",tarih:"08.06.2024",konum:"İstanbul/Şişli", isitma:"klima", binayasi:2 ,odasayi: "4+1",m2:210, iletisim:"0531 531 31 31", img:"https://askarprefabrik.com/wp-content/uploads/2021/09/iki-katli-moduler-ev-mce47-732x486.jpg"},
    {id:6, oneCikanlar:false, isim:"Sacha Center", fiyat:"160000 $",tarih:"30.06.2024",konum:"İstanbul/Mecidiyeköy", isitma:"kombi", binayasi:2 ,odasayi: "5+1",m2:290, iletisim:"0531 531 31 31", img:"https://www.ankaraprefabrikev.org/wp-content/uploads/img-20180510-wa0004_renamed_1383.jpg"},
    {id:7, oneCikanlar:false, isim:"Çıkarito Port", fiyat:"168000 $",tarih:"08.07.2024",konum:"İstanbul/Sultanahmet",  isitma:"klima", binayasi:3 ,odasayi: "5+1",m2:380, iletisim:"0531 531 31 31",img:"https://www.hepsiemlak.com/emlak-yasam/wp-content/uploads/2018/09/ev-satisi-icin-ilan-aciklamasina-neler-yazilmalidir-4.jpg"},
    {id:8, oneCikanlar:true, isim:"Kliyan Center", fiyat:"260000 $",tarih:"14.06.2024",konum:"İstanbul/Florya", isitma:"klima", binayasi:1 ,odasayi: "5+2",m2:450, iletisim:"0531 531 31 31", img:"https://villahanem.com/uploads/0-villa-hanem-kiralik-villa-berlin-1_86.jpg"},
    {id:9, oneCikanlar:true,isim:"Mauro Prestige", fiyat:"380000 $",tarih:"06.12.2024",konum:"İstanbul/Florya", isitma:"klima", binayasi:3 ,odasayi: "4+1",m2:540, iletisim:"0531 531 31 31", img:"https://askarprefabrik.com/wp-content/uploads/2019/11/izmir-moduler-ev-mce26.jpg"}
];

app.use("/urunler/:id", function(req,res) {
    const urun= data.find(u=>u.id == req.params.id); // kullanıcının istediği id ye göre sayfa döndürme
    res.render("urundetay" ,urun);
});

app.use("/urunler", function(req,res) {
    res.render("urunler", {  // ejs dosyasını arayacak!!!
        liste : data
    });
});

app.use("/", function(req,res) {
    res.render("index",{  // ejs dosyasını arayacak!!!
        liste : data
    }); // ejs dosyasını arayacak "index.ejs"!!
});


app.listen (3000, () =>{

    console.log("3000 portunu  http://127.0.0.1:3000/");
});