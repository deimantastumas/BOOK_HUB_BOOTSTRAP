$(document).ready(function(){
    var outputList = document.getElementById("list-output");
    var bookUrl="https://www.googleapis.com/books/v1/volumes?q=";
    var placeholder="<img src="<img src="https://via.placeholder.com/150">">"

    $("#searc-btn").click(function(){
        outputList.innerHTML ="";
        searchData= $("search-field").val();
        //handling empty search input field
        if(searchData === "" || searchData === null){
            displayError();
        }
        else{
            $.ajax({
                url: bookUrl + searchData,
                dataType: "json",
                success: function(response){
                    console.log(response);
                    if(response.totalItem === 0){
                        alert("no result");
                    }
                    else{
                        $("title").anitem({'margin-top: 10px'});
                    }
                }
            })
        }
    })
})