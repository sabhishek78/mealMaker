let menu={
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[],
      get getAppetizers(){
      return this.appetizers;
      },
      get getMains(){
      return this.mains;
      },
      get getDesserts(){
      return this.desserts;
      },
      set setAppetizers(appetizers){
      this.appetizers=appetizers;
      },
      set getMains(mains){
      this.mains=mains;
      },
      set getDesserts(desserts){
      this.desserts=desserts;
       }
     },
  get getCourses(){
    return {
      appetizers:this._courses.appetizers,
      mains:this._courses.mains,
      desserts:this._courses.desserts
    }
  },
  addDishToCourse:function(courseName,dishName,dishPrice){
    let dish={
      name: dishName,
      price:dishPrice,
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse:function(courseName){
    let dishes=this._courses[courseName];
    
    return dishes[Math.floor(Math.random()*dishes.length)];

  },
  generateRandomMeal(){
    let appetizer=this.getRandomDishFromCourse('appetizers');
    let main=this.getRandomDishFromCourse('mains');
    let dessert=this.getRandomDishFromCourse('desserts');
    let totalPrice=appetizer['price']+main['price']+dessert['price'];
    return `Appetizer=${appetizer['name']}, Main=${main['name']}, Dessert=${dessert['name']},price=${totalPrice}`;
  }
}
menu.addDishToCourse('appetizers','a1',1);
menu.addDishToCourse('appetizers','a2',1);
menu.addDishToCourse('appetizers','a3',1);
menu.addDishToCourse('mains','m1',1);
menu.addDishToCourse('mains','m2',1);
menu.addDishToCourse('mains','m3',1);
menu.addDishToCourse('desserts','d1',1);
menu.addDishToCourse('desserts','d2',1);
menu.addDishToCourse('desserts','d3',1);
let meal=menu.generateRandomMeal();
console.log(meal);
