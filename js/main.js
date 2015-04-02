$( "#lookup" ).submit(function( e ) {
  console.log( $("#address").val() );
  e.preventDefault();
  
  
  $.getJSON("https://api.phila.gov/ulrs/v3/addresses/" + $("#address").val() + "/service-areas?format=json",
        function(response) {
            for (var i = 0; i < response.serviceAreaValues.length; i++){
                if (response.serviceAreaValues[i].serviceAreaId == 'SA_PLANNING_2016Councilmanic'){
                    var districtNumber = response.serviceAreaValues[i].value;
                    $.getJSON("council.json", function(json) {
                        console.log(json);
                        $.each(json, function(i, item) {
                            console.log(json[i]);
                        });
                        
                    });
                    document.getElementById("district").textContent = "You are in council district " + districtNumber;
                    document.getElementById("councilMember").textContect = "Your councilmember is ";
                    
                }
            }
        });   
});
