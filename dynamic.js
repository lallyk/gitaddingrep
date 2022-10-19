
const posts=[
    {title:'post one',body:'This is post one',createdAt:new Date().getSeconds()},
    {title:'post two',body:'This is post Two',createdAt:new Date().getSeconds()}
];
let interId=0;
function getPosts(){
    /*setTimeout(()=> {
        let output='';
        posts.forEach((post,index) =>{
            output += `<li>${post.title} ${post.createdAt}</li>`;
            lastEditedInSecondsAgo()
        });*/
        clearInterval(interId);
        interId=setInterval(() =>{
            let output='';
            for(let i=0;i<posts.length;i++){
                output += `<li>${posts[i].title} updated ${new Date().getSeconds()-posts[i].createdAt} seconds ago</li>`;
            }
        document.body.innerHTML=output;
    },1000);
}
function getPosts1(){
        let output='';
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title} updated ${new Date().getSeconds()-posts[i].createdAt} seconds ago</li>`;
        }
    document.body.innerHTML=output;
}
function createPosts(post,callback){
    setTimeout(()=> {
        posts.push({...post,createdAt:new Date().getSeconds()}); 
        callback();
    },2000);
}
function create4Post(post,callback){
    setTimeout(()=> {
        posts.push({...post,createdAt:new Date().getSeconds()});
        callback();
    },1000);
}
getPosts1();
createPosts({title:'post three',body:'This is post three'},getPosts1);
create4Post({title:'post four',body:'This is post four'},createPosts);

