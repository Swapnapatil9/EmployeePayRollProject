 window.onload = function(){
 $(document).ready(function(){
         $('button').click(function(event){
            event.preventDefault()
            window.location.href="table.html";
        let name = $('#name').val();
        let profile = $("input[name='profile']:checked").val();
        let gender = $("input[name='gender']:checked").val();
        let department =[];
        $("input[name='department']:checked").each(function () {
                         department.push($(this).val());
                        });

        let salary = $('#salary').val();
        let day = $('#day').val();
        let month = $('#month').val();
        let year = $('#year').val();
    
        let notes = $('#notes').val();
    
        let obj = {
          name: name,
          departments: JSON.stringify(department),
          profileImage: profile,
          gender: gender,
          salary: salary,
          date: day + "/" + month + "/" + year,
          notes: notes,
        };
         console.log(obj);

         $.ajax({
			type: "POST",
			url: "http://localhost:3000/User",
			data: obj,
			success: function () {
				alert("data posted succesfully");
			},
			error: function () {
				
				alert("error in posting");
			},
		});
        });
 });
}