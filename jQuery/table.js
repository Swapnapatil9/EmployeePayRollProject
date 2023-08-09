window.onload = function(){
$(document).ready(function(event){
$.get( "http://localhost:3000/User", function( data ) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
            // 1) to create a <tr> for every object in the array
            // template lieteral
            let department = JSON.parse(data[i].departments);
            const tr = `<tr>
            <td> <img style="height:20px;width:20px;cursor:pointer" src=${data[i].profileImage}
            alt=""></td>
            <td>${data[i].name}</td>
            <td>${data[i].gender}</td>
             <td>${department.map((department) => {
               return `<span>${department}</span>`;
              }
              )}</td>
                <td>${data[i].salary}</td>
                <td>${data[i].date}</td>
                <td>         
                <img onclick="DeleteData(${data[i].id})" style="height:15px;width:15px;cursor:pointer" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png">
                
                <img onclick="UpdateData(${data[i].id})"  style="height:15px;width:15px;cursor:pointer" 
                src="https://cdn-icons-png.flaticon.com/512/61/61456.png">
                
                 </td>
            </tr>`;
    
            $(".tbody").append(tr);
                      
          }
    })
    //edit
    UpdateData =(id)=>{
      console.log("Inside update data");
    console.log("emp id:"+id);
    localStorage.setItem("id",id);
    window.location.href="editForm.html";
    }

    //delete
        DeleteData = (id) => {
            console.log(id);
            $.ajax({
              url: "http://localhost:3000/User/" + id,
              type: "DELETE",
              success: function (data) {
                console.log("showing data after Deleting by id");
                location.reload();
              },
              error: function (error) {
                console.log("Error: " + error);
              },
            });
          };
}
)};