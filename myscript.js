var cursor=document.querySelector(".cursor");
var main=document.querySelector(".container")
document.addEventListener("mousemove",function(dets){
cursor.style.left=dets.x+20+"px";
cursor.style.top=dets.y+20+"px";
})

function add_details(url1,name1,username1,link_id,follower_id,following_id,repo_id,image_id){
fetch(url1).then((file) => file.json())
.then((data) =>{
 
    document.getElementById(link_id).href=data.html_url;
  

   
 document.getElementById(follower_id).innerHTML=data.followers;
 document.getElementById(following_id).innerHTML=data.following;
 document.getElementById(repo_id).innerHTML=data.public_repos;

 const image=document.getElementById(image_id);
 image.style.backgroundImage = `url('${data.avatar_url}')`;
document.getElementById(name1).innerHTML=data.name;
document.getElementById(username1).innerHTML=data.login;

}).catch(error=> {
   alert(`Error: ${errorData.error.message}`);
  
console.error('An error occured: ',error);
})
};
add_details( "https://api.github.com/users/rituparna-ui" ,"name1", "username1","link1","f1","fl1","repo1","image1");
add_details( "https://api.github.com/users/realnimish" ,"name2", "username2","link2","f2","fl2","repo2","image2");
add_details( "https://api.github.com/users/AbhiSinha08" ,"name3", "username3","link3","f3","fl3","repo3","image3");
add_details( "https://api.github.com/users/keerthanaa-mahesh" ,"name4", "username4","link4","f4","fl4","repo4","image4");
add_details( "https://api.github.com/users/georgerahul24" ,"name5", "username5","link5","f5","fl5","repo5","image5");
add_details( "https://api.github.com/users/aman247av" ,"name6", "username6","link6","f6","fl6","repo6","image6");
add_details( "https://api.github.com/users/doxxsvm" ,"name7", "username7","link7","f7","fl7","repo7","image7");
add_details( "https://api.github.com/users/thehardiik" ,"name8", "username8","link8","f8","fl8","repo8","image8");
add_details( "https://api.github.com/users/aayushbarmecha" ,"name9", "username9","link9","f9","fl9","repo9","image9");
add_details( "https://api.github.com/users/Shrey-12  " ,"name10", "username10","link10","f10","fl10","repo10","image10");
add_details( "https://api.github.com/users/ssudhanshu488" ,"name11", "username11","link11","f11","fl11","repo11","image11");
add_details( "https://api.github.com/users/Sri-dhar" ,"name12", "username12","link12","f12","fl12","repo12","image12");







