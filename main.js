$(document).ready(function(){
    $.ajax({
      dataType: "json",
      url: "api.github",
      data: data,
      success: function(data){
        alert(data);

      }
    });
});
