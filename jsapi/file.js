//var request = new XMLHttpRequest();
//request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
//request.send();
//request.onload = ()=>{
  //  console.log(JSON.parse(request.response));
//}
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

//$(document).ready(function(){
   // $.ajax({
       // url: "https://jsonplaceholder.typicode.com/todos",
       // type: "GET",
       // success: function(result){
           // console.log(result);
      //  }
 //   })
// })
// fetch('https://jsonplaceholder.typicode.com/todos').then(response =>{
    // return response.json();
// }).then(data =>{
   // console.log(data);
// })
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

axios.get("https://jsonplaceholder.typicode.com/todos")
.then(response =>{
    console.log(response.data)
})
