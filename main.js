var courseName=document.querySelector("#courseName");
var courseCategory=document.querySelector("#courseCategory");
var coursePrice=document.querySelector("#coursePrice");
var courseDesc=document.querySelector("#courseDescription");
var courseCap=document.querySelector("#courseCapacity");
var addBtn=document.querySelector("#click");
var courses=[];
var input=document.querySelectorAll(".inputs");
addBtn.addEventListener("click",function(e){
    e.preventDefault();
    addcourse();
    clearInput();
    displayData();
});
function addcourse(){
    var course={
         name:courseName.value,
         category:courseCategory.value,
         price:coursePrice.value,
         desc:courseDesc.value,
         cap:courseCap.value,
    }
    courses.push(course);
    window.console.log(course);
}
function clearInput(){
 for(var i=0;i<input.length;i++){
    input[i].value="";
 }
}
function displayData(){
    var result="";
    for(var i=0;i<courses.length;i++){
        result +=`
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].category}</td>
        <td>${courses[i].price}</td>
        <td>${courses[i].desc}</td>
        <td>${courses[i].cap}</td>
        <td><button class="btn btn-outline-info">update</button></td>
        <td><button class="btn btn-outline-danger " onclick="deleteCourse(${i})">delete</button></td>
        </tr>

        `;
    }
    document.getElementById("data").innerHTML=result;
}
function deleteCourse(id){
courses.splice(id,1);
displayData();
}