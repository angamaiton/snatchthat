var baseUrl = "/activities/activityfeed"
$(document).ready(function() {
  $(window).on( "scroll" , function() {
       var $document = $(document);
       var $window = $(this);
       if( $document.scrollTop() >= $document.height() - $window.height() - 400 ) {
           fetchJSON();
        }
  });

  function fetchJSON(){
    $.ajax({
     method: "POST",
     url: baseUrl,
     dataType: "JSON"
     })
    .success(function(data) {
      addActivitiesToDOM(data);
    });
  }

  function addActivitiesToDOM(activityJSON){
    var formatted = formatActivities(activityJSON);
    $("#activity").append(formatted);
  }

  function formatActivities(activityJSON){
   // debugger;
    // use javascript for each 
    var array = []
    for (var key in activityJSON){
      if(activityJSON[key].type === "User" && activityJSON[key].action === "create"){
        var activityHTML = '<p>'+ activityJSON[key].userinfo +'<br><em class = "text-muted">followed</em> ' + activityJSON[key].name + '</p>';
        array.push(activityHTML);
      } else if(activityJSON[key].type === "User" && activityJSON[key].action === "destroy"){
        var activityHTML = '<p>'+ activityJSON[key].userinfo +'<br><em class = "text-muted"> unfollowed</em> ' + activityJSON[key].name + '</p>';
        array.push(activityHTML);
      } else if(activityJSON[key].type === "Closet" && activityJSON[key].action === "create"){
        var activityHTML = '<p>'+ activityJSON[key].userinfo +'<br><em class = "text-muted">created closet</em> ' + activityJSON[key].name + '</p>';
        array.push(activityHTML);
      } else if(activityJSON[key].type === "Closet" && activityJSON[key].action === "destroy"){
        var activityHTML = '<p>'+ activityJSON[key].userinfo +'<br><em class = "text-muted">deleted closet</em> ' + activityJSON[key].name + '</p>';
        array.push(activityHTML);
      } else if(activityJSON[key].type === "Item" && activityJSON[key].action === "create"){
        var activityHTML = '<p>'+ activityJSON[key].userinfo +'<br><em class = "text-muted">added</em> ' + activityJSON[key].name + ' <em class = "text-muted">to</em> '+ activity[JSON].source +'</p>';
        array.push(activityHTML);
      } else if(activityJSON[key].type === "Item" && activityJSON[key].action === "destroy"){
        var activityHTML = '<p>'+ activityJSON[key].userinfo +'<em class = "text-muted">deleted</em> ' + activityJSON[key].name + ' <br><em class = "text-muted">from</em> '+ activity[JSON].source +'</p>';
        array.push(activityHTML);
      }
    }
   // debugger;
      var HTML = '<br>' + array.join("")  
      return HTML  
  }
})  

    