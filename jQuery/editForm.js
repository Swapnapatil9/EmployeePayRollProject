window.onload = function(){
    console.log("inside onload");
    $(document).ready(function () {
        getdata();
        $('button').click(function(event){
            event.preventDefault()
            update()
            window.location.href="table.html";
    })
    })
      
    const empid = localStorage.getItem("id");
    function getdata() {
    console.log("Inside Get function");
    console.log(empid);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: ("http://localhost:3000/User/"+empid),
       
        success: function (data, textstatus, xhr) {
            console.log(data);
            $('#name').val(data.name);
            $('#salary').val(data.salary);
            $('#notes').val(data.notes);
            $('input[name=profile][value="' + data.profileImage + '"]').prop('checked', true);
            $('input[name=gender][value="' + data.gender + '"]').prop('checked', true);
            $('input[name=department]').each(function () {
                let deptValue = $(this).val();
                $(this).prop("checked", data.departments.includes(deptValue));
            })
            let startdate = (data.date).split("/");
            $("#date").val(startdate[0]);
            $("#month").val(startdate[1]);
            $("#year").val(startdate[2]);

        }
    })
}
  
function update(){
    console.log("Inside Update");
    const empid = localStorage.getItem("id");
    const Name = $('#name').val()
    const Department = [];
    const profileImage = $("input[name=profile]:checked").val()
    const Gender = $("input[name=gender]:checked").val()
    $("input[name=department]:checked").each(
        function () {
            Department.push($(this).val())
        }
    ) 
  
    const Salary = $("#salary").val()
    const Date = $("#date").val()
    const Month = $("#month").val()
    const Year = $("#year").val()
    const Notes = $("#notes").val()
    let reqdata = {
        name: Name,
        departments: JSON.stringify(Department),
        profileImage: profileImage,
        gender: Gender,
        salary: Salary,
        date: Date + "/" + Month + "/" + Year,
        notes: Notes
    }
//     console.log(empid)
// console.log(reqdata);
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: `http://localhost:3000/User/${empid}`,
        data:reqdata,

        success: function (data, textstatus, xhr) {
            console.log(data);
            alert("Data Updated sucessfully");
            // location.reload();
        },

        Error: function (xhr, textstatus, errorTrown) {
            alert("Data not Updated");
        }
    })
}
} 
