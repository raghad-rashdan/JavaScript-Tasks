let Mark = 99;

if(Mark>0 && Mark<50){ 
    document.write("FAIL");
}else if(Mark>=50 && Mark<60){
    document.write("the mark  D");
}else if(Mark>=60 && Mark<70){
    document.write("the mark C");
}else if(Mark>=70 && Mark<80){
    document.write("the mark B");
}else if(Mark>=80 && Mark<90){
    document.write("the mark A");
}else if (Mark>=90 && Mark<=100){

    document.write("the mark A+");
}else{
    document.write("No Mark")
}