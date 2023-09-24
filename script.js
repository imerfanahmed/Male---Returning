window.addEventListener("DOMContentLoaded", function () {
  
    // Get the form elements
    var form = document.getElementById("form");

  //add event listener for form submission
  form.addEventListener("submit", function (e) {
        e.preventDefault();

        calculateDoses();
    });

    function calculateDoses () {
        var flag = 0;

        document.getElementById("newTestosteroneDose").textContent="";
        document.getElementById("lastTestosteroneDoseLabel").textContent="";

        var appendcontent = document.getElementById("appendcontent");
        appendcontent.innerHTML = "";


        var lastTestosteroneDose = +document.getElementById("lastTestosteroneDose").value;

        document.getElementById("lastTestosteroneDoseLabel").textContent=lastTestosteroneDose;

        //id ="updatePSA" value
        var updatePSA = document.getElementById("updatePSA").value;

        //id ="symptompRelief" value
        var symptompRelief = document.getElementById("symptomRelief").value;

        //get checkbox values
        var sleepIssues = document.getElementById("sleepIssues").checked;
        var nightSweats = document.getElementById("nightSweats").checked;
        var moodiness = document.getElementById("moodiness").checked;
        var lowLibido = document.getElementById("lowLibido").checked;
        var brainFrog = document.getElementById("brainFog").checked;
        var jointPain = document.getElementById("jointPain").checked;
        var depressionAnxiety = document.getElementById("depressionAnxiety").checked;
        var farigue = document.getElementById("fatigue").checked;
        var other = document.getElementById("other").checked; 

        if(updatePSA === "No")
        {
            var divElement = document.getElementById("appendcontent");

            var pElement = document.createElement("p");
            pElement.textContent = "AUA recommends annual PSA test over 55 years of age.";
            divElement.appendChild(pElement);

        }

        if(flag!=1 && symptompRelief==="Yes" && (sleepIssues || nightSweats || moodiness || lowLibido || brainFrog || jointPain || depressionAnxiety || farigue || other))
        {
            flag = 1;
            document.getElementById("newTestosteroneDose").textContent= lastTestosteroneDose + "mg Pellets";

        }

        if(flag !=1 && symptompRelief === "No")
        {
            flag = 1;
            var newTestosteroneDose = lastTestosteroneDose + 200;
            document.getElementById("newTestosteroneDose").textContent= newTestosteroneDose + "mg Pellets";


            let p = document.createElement("p");
            p.textContent = "Dosage is increased one level due to lack of symptom relief.";
            divElement.appendChild(p);
        }

        if(flag!=1 && symptompRelief === "Yes")
        {
            flag = 1;
            var newTestosteroneDose = lastTestosteroneDose - 200;

            if(newTestosteroneDose < 0)
            {
                newTestosteroneDose = 0;
            }
            document.getElementById("newTestosteroneDose").textContent= newTestosteroneDose + "mg Pellets";


            let p = document.createElement("p");
            p.textContent = "Dosage is decreased one level due to symptom relief.";
            divElement.appendChild(p);
        }

    }


    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("calculate");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        if (form.checkValidity()) {
        calculateDoses();
        modal.style.display = "block";
        }
    };
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    };
        
});