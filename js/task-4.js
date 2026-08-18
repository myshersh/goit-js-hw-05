const getTotalBalanceByGender = (users, gender) => {
  // Використовуємо ланцюжок методів
  return users
    // Спочатку відфільтровуємо масив: залишаємо лише тих користувачів, у яких стать збігається із заданою
    .filter(user => user.gender === gender)
    // Після фільтрації рахуємо загальний баланс за допомогою методу reduce()
    // total - це фгрегатор, user - поточний користувач у відфільтрованому масиві
    .reduce((total, user) => total + user.balance, 0);
};

// Код для перевірки роботи функції
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
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
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
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053
console.log(getTotalBalanceByGender(clients, "female")); // 8863
