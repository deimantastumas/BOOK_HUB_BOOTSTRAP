$(document).ready(function(){

    $("#search-btn").submit(function(){
        console.log("yo hello");
        var search=$("#search-field").val();

        if(search==''){
            alert("Please fill in the field");
        }
        else{
            var url='';
            var img='';
            var title='';
            var author='';

            $.get("https://www.googleapis.com/books/v1/volumes?q="+search, function(response){
                console.log(response);
            });

        }
    })


    return false;
})