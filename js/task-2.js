const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};


const allUsers = [
    { 
     name: "Moore Hensley",
     friends: ["Sharron Pace"]
    },
    { 
     name: "Sharlene Bush",
     friends: ["Briana Decker", "Sharron Pace"]
    },
    { 
     name: "Ross Vazquez",
     friends: ["Naomi Buckner"]
    },
    { 
     name: "Elma Head",
     friends: ["Goldie Gentry", "Aisha Tran"]
    },
    { 
     name: "Carey Barr",
     friends: ["Jordan Sampson", "Eddie Strong"]
    },
    { 
     name: "Sheree Anthony",
     friends: ["Goldie Gentry", "Briana Decker"]
    }
 ];
  
  
 
 console.log(getUsersWithFriend(allUsers, "Briana Decker" )) ;  
 // [ 
 // { 
 // name: "Sharlene Bush", 
 // friends: ["Briana Decker", "Sharron Pace"] 
 // }, 
 // { 
 // name: "Sheree Anthony", 
 // friends: ["Goldie Gentry", "Briana Decker"] 
 // } 
 // ]
 
 console.log(getUsersWithFriend(allUsers, "Goldie Gentry" )); 
 // [ 
 // { 
 // name: "Elma Head", 
 // friends: ["Goldie Gentry", "Aisha Tran"] 
 // }, 
 // { 
 // name: "Sheree Anthony", 
 // friends: ["Goldie Gentry", "Briana Decker"] 
 // } 
 // ]
 
 console.log(getUsersWithFriend(allUsers, "Adrian Cross" ));  // []
 