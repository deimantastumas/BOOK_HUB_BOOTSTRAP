var title= "Title";
var author="Author";

var html_col = [
    '<div class="row hidden-md-up">',
        '<div class="col">',
            '<div class="card">',
                '<a href="#" data-bs-toggle="modal" data-bs-target="#myModal">',
                    '<div class="card-block">',
                        '<img src="https://via.placeholder.com/210x320">',
                        '<h4 class="card-title">'+title+'</h4>',
                        '<h6 class="card-subtitle text-muted">'+author+'</h6>',
                    '</div>',
                '</a>',
            '</div>',
        '</div>',
        '<div class="col">',
            '<div class="card">',
                '<a href="#" data-bs-toggle="modal" data-bs-target="#myModal">',
                    '<div class="card-block">',
                        '<img src="https://via.placeholder.com/210x320">',
                        '<h4 class="card-title">'+title+'</h4>',
                        '<h6 class="card-subtitle text-muted">'+author+'</h6>',
                    '</div>',
                '</a>',
            '</div>',
        '</div>',
        '<div class="col">',
            '<div class="card">',
                '<a href="#" data-bs-toggle="modal" data-bs-target="#myModal">',
                    '<div class="card-block">',
                        '<img src="https://via.placeholder.com/210x320">',
                        '<h4 class="card-title">'+title+'</h4>',
                        '<h6 class="card-subtitle text-muted">'+author+'</h6>',
                    '</div>',
                '</a>',
            '</div>',
        '</div>',
        '<div class="col">',
            '<div class="card">',
                '<a href="#" data-bs-toggle="modal" data-bs-target="#myModal">',
                    '<div class="card-block">',
                        '<img src="https://via.placeholder.com/210x320">',
                        '<h4 class="card-title">'+title+'</h4>',
                        '<h6 class="card-subtitle text-muted">'+author+'</h6>',
                    '</div>',
                '</a>',
            '</div>',
        '</div>',
    '</div>'
].join('');

//Creates empty div ROW
// var html_row= '<div class="row hidden-md-up" id="add-col"></div>';
// var div_row=document.createElement('div');
// div_row.innerHTML= html_row;
// document.getElementById('add-row').appendChild(div_row);

//Adds COLS to the ROW
for(var i=0; i<10; i++){
    var div = document.createElement('div');
    // div.setAttribute('class', 'post block bc2');
    div.innerHTML = html_col;
    document.getElementById('add-row').appendChild(div);
    console.log("Added 1 column to the row");
}

$(document).ready(function() {
    
});
