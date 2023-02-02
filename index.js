function scuberGreetingForFeet(feet){
  // Write your code here!
  let resp;
  if (feet <= 400) {
    resp = 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    resp = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    resp = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    resp = 'No can do.';
  }
  return resp;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city == "NYC" ? "Ok, sounds good." : "No go.";
}



function switchOnCharmFromTip(tip){
  // Write your code here!
  let thanks;
  switch (tip) {
    case 'generous' : 
      return thanks = "Thank you so much.";
      break;
    case 'not as generous' :
      return thanks = "Thank you.";
      break;
    default:
      return thanks = "Bye.";
      break;

  }

}
