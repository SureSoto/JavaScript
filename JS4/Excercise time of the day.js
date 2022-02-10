let time = 6;
let stAtus;

if( time == 6 || time == 7 || time == 8 || time == 9 || time == 10 || time == 11 ){
    stAtus = "good morning";
}
else if( time == 12 || time == 13 || time == 14 || time == 15 || time == 16 || time == 17 || time == 18){
    stAtus = " good afternoon";
}
else if( time == 19 || time == 20 || time == 21 || time == 22 || time == 23 || time == 24){
    stAtus = " good night";
}
else if( time == 0 || time == 1 || time == 2 || time == 3 || time == 4 || time == 5){
    stAtus = "Sleeping"
}
else{
    stAtus = "n/a"
}
    console.log(stAtus);

    /* La manera cortisima de hacerlo
    let time = 0
    let stAtus;
    if( time >= 6 && time <= 11){
        stAtus = "good morning"
    }
    else if( time >= 12 && time <= 18 ){
        stAtus = "good afternoon";
    }
    else if( time >=19  && time <= 24 ){
        stAtus = "good night";
    }
    else if( time >=0  && time < 6 ){
        stAtus = "sleeping";
    }
    else{
        stAtus = "n/a"
    }
    console.log(stAtus);
    */
    