import Food, { Size } from "../models/food"
import models from "../models"

export default class FoodFinder {
  menu: models.Food[]

  constructor() {
    // let hamburgerMedium = new Food("Hamburger (Medium)", 800, 3.99, Size.Medium)
    // let hamburgerLarge = new Food("Hamburger (Large)", 1200, 4.99, Size.Large)
    // let hotdog = new Food("Hotdog", 550, 3.5, Size.Medium)
    // let pizza = new Food("Margherita Pizza", 870, 5.5, Size.Medium)
    // let icecream = new Food("Chocolate icecream", 520, 3.7, Size.Medium)
    // this.menu = [hamburgerMedium, hamburgerLarge, hotdog, pizza, icecream]

    // User.find({}, function(err, users) {
    //   var userMap = {};

    //   users.forEach(function(user) {
    //     userMap[user._id] = user;
    //   });

    //   res.send(userMap);
    // });

    models.Food.find({}, (err, foodItems) => {
      console.log(foodItems)
      this.menu = foodItems
    })
  }

  // findFood(searchTerm: string): Food {
  //   searchTerm = searchTerm.toUpperCase()
  //   for (let i = 0; i < this.menu.length; i++) {
  //     let foodItem = this.menu[i]
  //     if (foodItem.name.toUpperCase().indexOf(searchTerm) > -1) {
  //       return foodItem
  //     }
  //   }
  // }
}
