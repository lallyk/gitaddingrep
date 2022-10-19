const posts=[
    {title:'post one',body:'This is post one',createdAt:new Date().getSeconds()},
    {title:'post two',body:'This is post Two',createdAt:new Date().getSeconds()}
];
function getPosts1(){
    setTimeout(()=> {
        let output='';
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title} updated ${new Date().getSeconds()-posts[i].createdAt} seconds ago</li>`;
        }
    document.body.innerHTML=output;
        },1000);
}
function createPosts(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=> {
        posts.push({...post,createdAt:new Date().getSeconds()}); 
        const error=false;
        if(!error){
            resolve();
        } else{
         reject('error:something wrong');
        }
    },2000);
});
}
function deletPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            if(posts.length >0){
                resolve(posts.pop());
            } else{
             reject
             ('array is empty now');
            }
        },1000);
    });
}

createPosts({title:'post three',body:'This is post three'})
 .then(()=>{
   getPosts1()
   deletPost().then((deletedElement)=>{
    console.log(deletedElement)
      getPosts1()
      deletPost().then(()=>{
        getPosts1()
        deletPost().then(()=>{
            getPosts1()
            deletPost().then(()=>{})
            .catch(err=>console.log(err));
        })
     }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
 })
 .catch(err=>console.log(err));
 
