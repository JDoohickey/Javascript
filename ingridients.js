const sevenColours = function(factor,ingr){
  const ingredient  = function(amount,unit,name){
    let ingredientAmount = amount*factor;
    if (ingredientAmount >1){
      unit +="s"
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);

    }
    for (let i = 0; i < ingr.length; i++) {
      ingredient(ingr[i][0],ingr[i][1],ingr[i][2]);

    }

  }
sevenColours(2,[[1,"cup","cabbage"],[2,"cup","rice"]]);

// In this example we can not globally call the ingredient function.
// We call the sevenColour function and it uses the ingredient fuction to return the number of specified ingredients in it.
// How do i add more ingredients? Done[still needs work ]
