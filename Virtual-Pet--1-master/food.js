class Food{
constructor() {}

getfood() {
  foodRef = database.ref("food");
  food.on("value",(data)=>{
      food.data.val();
  })
}
   update(food) {
    database.ref('/').update({food:food});
   }

}









