// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
 // for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
   // debugger;
 // }

 // return gifts;
//}//
//wrapGifts(gifts);


//const names = ["Ada", "Brendan", "Ali"];
//const event = ["birthday"];

//function writeCards(names , event) {
    
  //  for (let i = 0; i < names.length; i++) {
  //    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    //}
    //return messages;
  //}
  let names = ['John', 'Jane', 'Jack'];
  let event = 'birthday';
  
  let messages = writeCards(names, event);
  console.log(messages);
  
  function writeCards(namesArray, eventName) {
    let messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messagesArray;
  }
  

countDown(15);
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }