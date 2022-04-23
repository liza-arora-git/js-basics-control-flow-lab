function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  if (distance <= 400) {
    result = 'This one is on me!';  
  }

  if (distance > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }

  if (distance > 2500) {
    result = 'No can do.';
  }

  return result;
}
// scuberGreetingForFeet(199);
// scuberGreetingForFeet(2001);

function ternaryCheckCity(city){
  // Write your code here!
  var message = (city === `NYC`) ? 'Ok, sounds good.' : 'No go.';
  console.log(message);
  return message;
}
ternaryCheckCity('NYC');
ternaryCheckCity('ANY');

function switchOnCharmFromTip(tip){
  // Write your code here!
  var mess;
  var tip;

  switch(tip){
    case "generous": mess = "Thank you so much.";
    console.log(mess);
    break;
    case "not as generous": mess = "Thank you.";
    console.log(mess);
    break;
    default: mess = "Bye.";
    console.log(mess);
  }
  return mess;
}

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('nothing');
