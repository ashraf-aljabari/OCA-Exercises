
class User{
  constructor(location,numberOfChildren,partnerName,jobTitle){
    this.jobTitle = jobTitle;
    this.location = location;
    this.numberOfChildren = numberOfChildren;
    this.partnerName = partnerName;
  }
}

function tellFortune(user){

  alert("You will be "+user.jobTitle + " in "+ user.location + " and get married to " + user.partnerName +" with " + user.numberOfChildren + " kids.");
   
}

// variable object.
// var currentUser = {
//   jobTitle: prompt("What's your job title"),
//   location: prompt("What's your location"),
//   numberOfChildren: prompt("What's your number of children"),
//   partnerName: prompt("What's your partner name")
// };

//class object.
currentUser = new User();

currentUser.jobTitle = prompt("What's your job title");
currentUser.location = prompt("What's your location");
currentUser.numberOfChildren = prompt("What's your number of children");
currentUser.partnerName = prompt("What's your partner name");


tellFortune(currentUser);