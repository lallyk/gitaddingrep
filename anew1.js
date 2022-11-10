Let promise1=New Promise((resolve,reject)=>{
  reject ({ msg: 'Something went wrong' ))
  })
  promise1.then((data)=>{console.log(data)})
  .catch(err=>{console.log(‘Error occurred’ + err) })
  

  Error occured something went wrong