const inventoryAmout =(inventory)=>{
  let listItems = Object.keys(inventory);
  let total=0;
  let finishedItems=[];

  for (let index = 0; index < listItems.length; index++) {
    if(inventory[listItems[index]]==0){
      finishedItems.push(listItems[index]);
    }else{
       total+=inventory[listItems[index]]
    }

  }

  if(finishedItems.length>1){
    console.log(`${finishedItems} are finished.`)
  }else{
    console.log(`${finishedItems} is finished.`)
  }
  console.log(`There are ${total} items of inventory remaining.`)

}
let storeInventory = {'bread': 0,
    'beans': 5,
    'drinks': 10,
    'snacks': 0,
    'fish': 4

  }


inventoryAmout(storeInventory)
