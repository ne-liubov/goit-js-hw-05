const clients = [
    { 
      name: "Moore Hensley",
      gender: "male",
      balance: 2811
    },
    { 
      name: "Sharlene Bush",
      gender: "female",
      balance: 3821
    },
    { 
      name: "Ross Vazquez",
      gender: "female",
      balance: 2278
    },
    { 
      name: "Carey Barr",
      gender: "male",
      balance: 3951
    },
    { 
      name: "Blackburn Dotson",
      gender: "male",
      balance: 2764
    }
  ];


const getTotalBalanceByGender = (users, gender) => {
    return users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0)
}



console.log(getTotalBalanceByGender(clients, "male" )) ;  // 12053

console.log(getTotalBalanceByGender(clients, "female" )) ;  // 8863