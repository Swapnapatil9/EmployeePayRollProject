window.onload = function () {
      let formname = document.getElementById("myform");
      formname.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
    
        const profilePic = document.getElementsByName("profile");
        let profile = "";
        for (var i of profilePic) {
          if (i.checked) {
            profile = i.value;
          }
        }
        let genders = document.getElementsByName("gender");
        let gender = "";
        for (var i of genders) {
          if (i.checked) {
            gender = i.value;
          }
        }
        let departments = document.getElementsByName("department");
        let department = [];
        for (var i of departments) {
          if (i.checked) {
            department.push(i.value);
          }
        }
        let salary = document.getElementById("salary").value;
        let day = document.getElementById("day").value;
        let month = document.getElementById("month").value;
        let year = document.getElementById("year").value;
    
        let notes = document.getElementById("notes").value;
    
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
        fetch("http://localhost:3000/User", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then(function (response) {
            if (response.ok) {
              // Request was successful
              console.log("Data sent successfully");
            } else {
              // Request was not successful
              console.error("Error:", response.status);
            }
          })
          .catch(function (error) {
            // An error occurred during the request
            console.error("An error occurred:", error);
          });
      });
    };
    
    