canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

car1_x=10;
car1_y=10;

car2_x=10;
car2_y=100;

background= "https://i.postimg.cc/bv5d35nK/racing.jpg"

car1_height= 80;
car1_width= 100;

car2_height= 80;
car2_width= 100;



car="https://i.postimg.cc/YqdnnNX1/car1.png";


function add(){

    Background2 = new Image();
    Background2.onload= upload_b;

    Background2.src= background;


    car_img= new Image ();
    car_img.onload= upload_car;
    car_img.src= car;
     
    car2_img= new Image ();
    car2_img.onload= upload_car2;
    car2_img.src= car;
     
}



function upload_b(){

    ctx.drawImage(Background2,0,0,canvas.width,canvas.height)
}
function upload_car(){

    ctx.drawImage(car_img, car1_x, car1_y, car1_width, car1_height);


}
function upload_car2(){

    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);


}
window.addEventListener("keydown",my_keydown)

function my_keydown(e){

   key_pressed=e.keyCode

   if (key_pressed == '87'){
    car2_up();
   }
   if (key_pressed == '65'){
    car2_left();
   }
   if (key_pressed == '83'){
    car2_down();
   }
   if (key_pressed == '68'){
    car2_right();
   }

   if (key_pressed == '37'){
    
    left();


   }

   else if(key_pressed == '38'){

    up();

   }

   else if(key_pressed == '39'){
       right();

   }

   else if (key_pressed == '40'){

    down();


   }
   if (car1_x >= 700){
       document.getElementById("gameStatus").innerHTML= "Car 1 Won!!!!"
   }
   if (car2_x >= 700){
    document.getElementById("gameStatus").innerHTML= "Car 2 Won!!!!"
}

}

function left(){

    if (car1_x > 0){

    car1_x=car1_x-10
    upload_b()
    upload_car()
    upload_car2()

}

}

function up(){

    if( car1_y>0){

        car1_y=car1_y-10
        upload_b()
        upload_car()
        upload_car2()
    }
}

function right(){

if(car1_x<= 700){


    car1_x= car1_x+10;
      upload_b()
        upload_car()
        upload_car2()
    }


}

function down(){

    if(car1_y <= 500){

        car1_y= car1_y+10;
        upload_b()
        upload_car()
        upload_car2()
    }
}
function car2_up(){

    if( car2_y>0){

        car2_y=car2_y-10
        upload_b()
        upload_car()
        upload_car2()
    }
}
function car2_down(){

    if(car2_y <= 500){

        car2_y= car2_y+10;
        upload_b()
        upload_car()
        upload_car2()
    }
}
function car2_right(){

    if(car2_x<= 700){


        car2_x= car2_x+10;
          upload_b()
            upload_car()
            upload_car2()
        }
    

}
function car2_left(){

    if (car2_x > 0){

        car2_x=car2_x-10
        upload_b()
        upload_car()
        upload_car2()
    
    }
}
