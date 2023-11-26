// let a = 5;
// // assigment operators
// a **= 3;
// console.log(a)



// let a = +prompt("birinchi insonni yoshini kiriting ...");
// let b = +prompt("ikkinchi insonni yoshini kiriting ...");


// if (a > b){
//     console.log(a);
// } else {
//     console.log(b);
// }


        // 1-misol

// let a = +prompt("birinchi sonni kiriting");
// a*2;
// let b = +prompt("ikkinchi sonni kiriting");
// b*2


// if (a > b) {
//     console.log(b)
// }
// if(a < b) {
//     console.log(b)
// }

        // 2-misol

// let a = +prompt("birinchi sonni kiriting");
// let b = +prompt("ikkinchi sonni kiriting");
// let c = +prompt("uchinchi sonni kiriting");

//   if (a > b) {
//     console.log(a);
//   } else{
//     b
//   }
//   if(b > c) {
//     console.log(b);

//   } else {
//     console.log(c)
//   }



          // 3-misol
    
    // let raqam = +prompt("Biror raqamni kiriting");

    // if(raqam % 2 ==0) {
    //   console.log(
    //     "bu raqam juft raqam"
    //   );

    // }      else {
    //     console.log("bu raqam toq raqam")
    // }



        // 4-misol

  // let raqam= +prompt("raqam kiritilsin");

  // if (raqam % 5 ==0){
  //   console.log("bu raqam 5 soniga karrali raqam hisoblanadi");
  // } else{
  //   console.log("bu raqam 5 sonini karralisi emas");
  // }



  // 5-misol
  // let raqam = +prompt("biror raqam kiriting ...");

  // if(raqam > 9){
  //   console.log("bu son ikki xonali son hisoblanadi");
  // } else{
  //   console.log("bu son ikki xonali son emas");
  // }

  

  // 6-misol


  // let raqam = +prompt("biror raqam kiriting ...")

  // if(raqam < 9){
  //   console.log("bu raqam bir xonl=ali raqam hisoblanadi")
  // } else{
  //   console.log("bu raqam bir xonali raqam emas")
  // }


  // 7-misol


  // let raqam = +prompt("biror raqam kiriting");

  // if (raqam > 9) {
  //   console.log("rost");
  // }  else{
  //   console.log("yolg'on");
  // }

  // 8-misol 


  // let raqam = +prompt("biror raqam kiriting");
  // if(raqam % 10 == 0){
  //   console.log("yol'gon");
  // } else{
  //   console.log("rost");
  // }


  // 9-misol 

  // let raqam = +prompt ("biror bir raqam kiriting");
 

  // if ( raqam < 1000) {
  //   raqam = raqam / 100;
  //   console.log("bu raqam yuzlar xonasidagi son");
  // } else{
  //   console.log("bu raqam yuzlar xonasidagi son emas");
  // }



  // 10-misol

        let num = +prompt("Biror bir raqam kiriting");
        let numOne;
        let numTwo;
        numOne = num / 100;
        numTwo = (num % 100) / 10;
        // num = num % 10;

        if (num > numOne) {
          if (numOne > numTwo) {
            console.log(num);
          } else {
            console.log(numTwo);
          }
        } else {
          console.log(numOne);
          if (numOne > numTwo) {
            console.log(numOne);
          } else {
            console.log(numTwo);
          }
}