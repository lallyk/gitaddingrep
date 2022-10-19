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
const Promise1=Promise.resolve('hello world');
const Promise2=10;
const Promise3=new Promise((resolve,reject)=>
    setTimeout(resolve,2000,'goodbye'));
Promise.all([Promise1,Promise2,Promise3]).then(values=>console.log(values));
