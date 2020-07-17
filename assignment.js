                /** WELCOME TO CODING WORLD */

//Feet To Mile Converter :

function feetToMile(feet){
    var mile = feet/5280;    //converting mile to feet
    return mile;
}
var result = feetToMile(10000); //() Have to give any value here
console.log(result);



// Wood - Calculator :

function woodCalculator(chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount   = bed * 5;
    var total = chairCount + tableCount + bedCount;
    return total;
}
var result = woodCalculator(10, 15, 20); //giving the chair,table and bed numbers
console.log(result);    



// Brick - Calculator :

function brickCalculator(floor){

    var brick = floor * 1;
    if(floor<=10){
         brick= floor*(15 * 1000);
      
    }
    else if(floor>10 && floor<=20){
        brick= (10*15*1000)+(floor-10)*12*1000;
        
    
    }
    else{
        brick= (10*15*1000)+(10*12*1000)+(floor-20)*10*1000;
    }
    return brick;
    }
    var result = brickCalculator(25); //Have to give floor numbers
    console.log(result);             //for output of total brick number



//Tiny - Friend :

function tinyFriend(name){
    var tinyName = name[0];
    for(var i=0;i<name.length;i++){
        var friendList = name[i];
        if(friendList.length<tinyName.length){
            tinyName=friendList;
        }
    }
    return tinyName;
}
var friendList = tinyFriend(['Abdullah', 'Alam', 'Jakirul', 'opu']);
console.log(friendList);
  

                      /** THANK YOU */

