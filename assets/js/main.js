$(document).ready(function() {

    $('.menu-button').click(function() {
        $('.links, .overlay').toggleClass('display');
    })
    
    $('.overlay').click(function() {
        $('.links, .overlay').removeClass('display');
    })
});

    $(function(){
        $(".ajaxForm").submit(function(e){
            e.preventDefault();
            var href = $(this).attr("action");
            $.ajax({
                type: "POST",
                dataType: "json",
                url: href,
                data: $(this).serialize(),
                success: function(response){
                    if(response.status == "success"){
                        window.location.href = 'thanks'; // change this. 
                    }else{
                        alert("An error occured: " + response.message);
                    }
                }
            });
        });
    });