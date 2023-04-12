///////////array tasks////////////

 //1
  const arr=[ 1,2,3,4,5,6,7,8,9,10]
  console.log(arr);
   //2
   const arr1=[ 
     1,
     true,
     "leyla"
   ]
   console.log(arr1)
   //3
   const arr2=[ 0,1,2,3,4,5 ]
   const arr3=arr2
   console.log(arr3)
   //4
   const arr4=[0,1,2,3,4,5,6,7]
   arr4.push(8,9)
   console.log(arr4);
   //5
   const arr5=[]
   arr5.push(5,6,7)
   arr5.shift()
   arr5.unshift(1)
   console.log(arr5);
   //6
   const arr6=[
    "leyla",
    "nezerli",
    21,
    "quba"
   ]
   arr6[3]="qusar"
   console.log(arr6);
   //7
   const arr7=["first Task"]
    for (let i of arr7){
        console.log(i)
    }
    /////objects/////
    //8
    const obj={
        id:1,
        firstName:"leyla",
        lastName:"nezerli",
        location: "GDU 2"
    }
    console.log(obj);
    //9
    const obj1={}
    const obj2=obj1
    console.log(obj2);
    //10
    console.log(obj.id=3);
    //11
    for(let key in obj)
    console.log(obj[key]);
    //12
    for(let key in obj)
    console.log(key);
    //13
    delete obj.location;
    //14
    
    const no3=Object.assign(obj)
    console.log(no3);
    
    



