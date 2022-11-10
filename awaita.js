console.log('person1:shows ticket');
console.log('person2:shows ticket');
const preMovie=async()=>{
   const promiseWifeTick=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
   });
   const getPop=new Promise((resolve,reject)=>resolve(`popcorn`));
   const addButter=new Promise((resolve,reject)=>resolve(`butter`));
   const getColdDrinks =new Promise((resolve,reject)=>resolve(`sprite`));
   let ticket=await promiseWifeTick;
   console.log('wife:i have the tickets');
   console.log('hus:we should go');
   console.log('wife:i am hungry');
   let popcorn=await getPop;
   console.log('hus:i have the popcorn');
   console.log('hus:we should go');
   console.log('wife:i need butter');
   let butter=await addButter;
   console.log(`hus:i got some ${butter} on popcorn`);
   console.log('wife:i need cooldrink');
   let drink=await getColdDrinks;
   console.log(`hus:i got  ${drink} `);
   return ticket;
}
preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket'); 