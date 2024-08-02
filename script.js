/*Задача: есть массив элементы которого-стоимость акций каждый новый день. В день можно либо купить, либо продать акцию. Если ты купил акцию, на следующий день ты обязан ее продать. Если у тебя нет акций после покупки, ты обязан купить акцию 
найти профит*/

const arr2=[0,7,1,5,3,6,4];
const arr=[7,1,5,3,6,4];

function profit(arr){
  let el0=0;
  let el1=0;
  let count=0;
  for(let i=0;i<arr.length;i++)
  {
    if(arr.length%2===0){
      if(i%2===0){
        if(i>0)el1=el1+arr[i]
        el0=el0-arr[i]
      }
      else{
        if(i<arr.length-1)el1=el1-arr[i]
        el0=el0+arr[i]
      }
    }
    else{
      if(i%2===0){
        if(i>0)el1=el1+arr[i]
        if(i<arr.length-1)el0=el0-arr[i]
      }
      else{
        el1=el1-arr[i]
        el0=el0+arr[i]
      }
    }
  }
  if(count>=arr.length)console.log(0)
  else (el0>el1)?console.log(el0):console.log(el1);
}

profit(arr)