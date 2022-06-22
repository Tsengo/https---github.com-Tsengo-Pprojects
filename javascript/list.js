const data = ['About','About','How it work','Pricing','Solution','Features'];
let list = "<ul>";
    for(let i=0;i<data.length;i++){
        list += "<li><a href='#'>"+data[i]+"</a></li>";
    }
list +="</ul>";
console.log(list);
document.getElementById("navigation").innerHTML = list;
document.getElementById("navigation").style.display = "flex";
document.getElementById("navigation").style.alignItems = "center";



const data1 = ['Login','Register'];
let list1 = "<li>";
    for(let i=0;i<data1.length;i++){
        list1 +="<a href='#'>"+data1[i]+"</a>";
    }
list1 +="</li>";
console.log(list1);
document.getElementById("log_reg").innerHTML = list1;
document.getElementById("log_reg").style.display = "flex";
document.getElementById("log_reg").style.alignItems = "center";



const small = ['Get Started',];
let small_list = "<li>";
    for(let i=0;i<small.length;i++){
        small_list +="<a href='#'>"+small[i]+"</a>";
    }
small_list +="</li>";
console.log(small_list);

document.getElementById("get-started").innerHTML = small_list;



var paragraph2 = document.getElementById("text");
var p1 = document.createTextNode("All research start from here");
paragraph2.appendChild(p1);
document.getElementById("text").style.fontSize = "14px";
document.getElementById("text").style.lineHeight = "14px";
document.getElementById("text").style.fontWeight = "400";
document.getElementById("text").style.textAlign = "center";



const images = ["<img src='img/1.png'>","<img src='img/2.png'>","<img src='img/3.png'>","<img src='img/4.png'>","<img src='img/5.png'>","<img src='img/6.png'>","<img src='img/7.png'>","<img src='img/8.png'>","<img src='img/9.png'>","<img src='img/10.png'>","<img src='img/11.png'>","<img src='img/12.png'>","<img src='img/13.png'>","<img src='img/14.png'>","<img src='img/15.png'>","<img src='img/16.png'>"];
let list_images = "<li>";
    for(let i=0;i<images.length;i++){
        list_images +="<a href='#'>"+images[i]+"</a>";
    }
list_images +="</li>";
console.log(list_images);
document.getElementById("logoes").innerHTML = list_images;



const web_img = ["<img src='img/social media8.png'>","<img src='img/social media7.png'>","<img src='img/social media6.png'>","<img src='img/social media5.png'>","<img src='img/social media4.png'>","<img src='img/social media3.png'>","<img src='img/social media2.png'>","<img src='img/social media1.png'>"];
const links = ["https://www.facebook.com/","https://twitter.com/","https://www.tesla.com/","https://www.pinterest.com/","#","#","https://vk.com/wiki","https://www.linkedin.com/"];
let web_img_list = "<li>";
    for(let i=0;i<web_img.length;i++){
        web_img_list +="<a href='"+links[i]+"'>"+web_img[i]+"</a>";
    }
web_img_list +="</li>";
console.log(web_img_list);
document.getElementById("web-pages").innerHTML = web_img_list;



const twits_img = ["<img src='img/tweet 1.png'>","<img src='img/tweet 2.png'>","<img src='img/tweet 3.png'>"];
let twits_img_list = "<li>";
    for(let i=0;i<twits_img.length;i++){
        twits_img_list +=twits_img[i];
    }
    twits_img_list +="</li>";
console.log(twits_img_list);
document.getElementById("twits").innerHTML = twits_img_list;



const data4 = ['Up to 5 page each group','Up to 10 group page','5 Days group page saved'];
let list4 = "<ul>";
    for(let i=0;i<data4.length;i++){
        list4 +="<li>"+"<img src='img/mark.png'>"+data4[i]+"</li>";
    }
list4 +="</ul>";
console.log(list4);
document.getElementById("some-list").innerHTML = list4;



const data5 = ['Up to 15 page each group','Download page up to 20 page','Up to 10 group page','15 Days group page saved'];
let list5 = "<ul>";
    for(let i=0;i<data5.length;i++){
        list5 +="<li>"+"<img src='img/mark.png'>"+data5[i]+"</li>";
    }
list5 +="</ul>";
console.log(list5);
document.getElementById("some-list1").innerHTML = list5;



const data6 = ['Unlimited group pages','Unlimited download page','Unlimited page each group','Customize sorting group pages','Customize group page name','30 Days group page saved'];
let list6 = "<ul>";
    for(let i=0;i<data6.length;i++){
        list6 +="<li>"+"<img src='img/mark.png'>"+data6[i]+"</li>";
    }
list6 +="</ul>";
console.log(list6);
document.getElementById("some-list2").innerHTML = list6;



const data7 = ['Privacy Policy','Terms and Conditions','Contact Us','Careers'];
let list7 = "<ul>";
    for(let i=0;i<data7.length;i++){
        list7 +="<li>"+"<a href ='#'>"+data7[i]+"</a>"+"</li>";
    }
list7 +="</ul>";
console.log(list7);
document.getElementById("lastmenu").innerHTML = list7;
document.getElementById("lastmenu").style.display = "flex";
document.getElementById("lastmenu").style.alignItems = "center";