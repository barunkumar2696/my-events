
var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }
  var gor=document.getElementById("for")
  var right=document.getElementById("right");
  var left=document.getElementById("left");
  var div=document.createElement("div");
  var nameofProduct=document.createElement("p");
  nameofProduct.innerText=productData.name;
  nameofProduct.style.fontSize="50px";
  nameofProduct.style.fontFamily="Montserrat, sans-serif";
  var brand=document.createElement("p");
  brand.innerText=productData.brand;
  brand.style.color="grey";
  brand.style.fontSize="20px";
  brand.style.fontFamily="Montserrat, sans-serif"
  var price0=document.createElement("p");
  price0.innerText=`Price: RS `;
  price0.style.fontSize="25px";
  price0.style.fontFamily="Montserrat, sans-serif";
  var price2=document.createElement("span");
  price2.innerText=productData.price;
  price2.style.color="green";
  price0.appendChild(price2);
  var description=document.createElement("p");
  description.innerText="Description";
  description.style.fontSize="25px";
  description.style.fontFamily="Montserrat, sans-serif";
  var description2=document.createElement("p");
  description2.innerText=productData.description;
  description2.style.fontSize="16px";
  description2.style.fontFamily="Montserrat, sans-serif";
  description2.style.color="gray";
  var heading=document.createElement("p");
  heading.innerText="Product Preview";
  heading.style.fontSize="25px";
  heading.style.fontFamily="Montserrat, sans-serif";
  var img1=document.createElement("img");
  img1.src=productData.photos[0];
  img1.width="100";
  img1.style.padding="5px";
  img1.style.border="3px solid green"
 var img2=document.createElement("img");
   img2.src=productData.photos[1];
  img2.width="100";
  
  img2.style.padding="5px";
  img2.style.marginLeft="5px";
  var img3=document.createElement("img");
   img3.src=productData.photos[2];
  img3.width="100";
  img3.style.padding="5px";
  img3.style.marginLeft="5px";
  var img4=document.createElement("img");
   img4.src=productData.photos[3];
  img4.width="100";
  img4.style.padding="5px";
  img4.style.marginLeft="5px";
  var img5=document.createElement("img");
   img5.src=productData.photos[4];
  img5.width="100";
 img5.style.padding="5px";
  img5.style.marginLeft="5px";
 
  div.append(nameofProduct,brand,price0,description,description2,heading,img1,img2,img3,img4,img5);
    right.appendChild(div);
    var clickCounter = 0;
  function onClickHandler(){
    clickCounter++;
    if(clickCounter==1){
        var img2=document.createElement("img")
        img2.src=productData.photos[1];
        img2.width="500";
        img2.height="600";
        img2.classList.add("shift");
        left.appendChild(img2);
        gor.style.display="none";
    }else{
      var img2=document.createElement("img")
        img2.src=productData.photos[1];
        img2.width="500";
        img2.height="600";
        img2.classList.add("shift");
        left.appendChild(img2);
        gor.style.display="none";
    }
}
  
img2.addEventListener("click",onClickHandler);
var clickCounter2=0;
  function onClickHandler2(){
    clickCounter2++;
        var img1=document.createElement("img")
        img1.src=productData.photos[0];
        img1.width="500";
        img1.height="600";
        img1.classList.add("shift");
        left.appendChild(img1);
    
    
}
  
  img1.addEventListener("click",onClickHandler2);

  img3.addEventListener("click",onClickHandler3);
  var clickCounter3=0;
    function onClickHandler3(){
      clickCounter3++;
      if(clickCounter3==1){
          var img3=document.createElement("img")
          img3.src=productData.photos[2];
          img3.width="500";
          img3.height="600";
          img3.classList.add("shift");
          left.appendChild(img3);
          gor.style.display="none";
      }else{
        var img3=document.createElement("img")
          img3.src=productData.photos[2];
          img3.width="500";
          img3.height="600";
          img3.classList.add("shift");
          left.appendChild(img3);
          gor.style.display="none";
      }
      
  }
    
    img3.addEventListener("click",onClickHandler3);
  
    var clickCounter4=0;
    function onClickHandler4(){
      clickCounter4++;
      if(clickCounter4==1){
          var img4=document.createElement("img")
          img4.src=productData.photos[3];
          img4.width="500";
          img4.height="600";
          img4.classList.add("shift");
          left.appendChild(img4);
          gor.style.display="none";
      }else{
        var img4=document.createElement("img")
          img4.src=productData.photos[3];
          img4.width="500";
          img4.height="600";
          img4.classList.add("shift");
          left.appendChild(img4);
          gor.style.display="none";
      }
      
  }
    
    img4.addEventListener("click",onClickHandler4);
  
    var clickCounter5=0;
    function onClickHandler5(){
      clickCounter5++;
      if(clickCounter5==1){
          var img5=document.createElement("img")
          img5.src=productData.photos[4];
          img5.width="500";
          img5.height="600";
          img5.classList.add("shift");
          left.appendChild(img5);
          gor.style.display="none";
      }else{
        var img5=document.createElement("img")
        img5.src=productData.photos[4];
        img5.width="500";
        img5.height="600";
        img5.classList.add("shift");
        left.appendChild(img5);
        gor.style.display="none";
      }
      
  }
    
    img5.addEventListener("click",onClickHandler5);

var i=0;
    function onClickHandler6(){
      i++;
      img2.style.border="3px solid green";
      img1.style.border="none";
      img3.style.border="none";
      img4.style.border="none";
      img5.style.border="none";
    }
    img2.addEventListener("click",onClickHandler6);

    function onClickHandler7(){
      i++;
      img1.style.border="3px solid green";
      img2.style.border="none";
      img3.style.border="none";
      img4.style.border="none";
      img5.style.border="none";
    }
    img1.addEventListener("click",onClickHandler7);

    function onClickHandler8(){
      i++;
      img3.style.border="3px solid green";
      img1.style.border="none";
      img2.style.border="none";
      img4.style.border="none";
      img5.style.border="none";
    }
    img3.addEventListener("click",onClickHandler8);

    function onClickHandler9(){
      i++;
      img4.style.border="3px solid green";
      img1.style.border="none";
      img2.style.border="none";
      img3.style.border="none";
      img5.style.border="none";
    }
    img4.addEventListener("click",onClickHandler9);

    function onClickHandler10(){
      i++;
      img5.style.border="3px solid green";
      img1.style.border="none";
      img2.style.border="none";
      img3.style.border="none";
      img4.style.border="none";
    }
    img5.addEventListener("click",onClickHandler10);
  
