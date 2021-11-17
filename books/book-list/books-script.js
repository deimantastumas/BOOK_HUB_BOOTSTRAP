var title= "Title";
var author="Author";

const html_col = [
    '<div class="card">',
        '<a href="#" data-bs-toggle="modal" data-bs-target="#myModal">',
            '<div class="card-block">',
                '<img src="https://via.placeholder.com/210x320">',
                '<h4 class="card-title">'+title+'</h4>',
                '<h6 class="card-subtitle text-muted">'+author+'</h6>',
            '</div>',
        '</a>',
    '</div>',
];

var rowCount = 5;
var colCount = 5;

for (let row = 0; row < rowCount; row++) {
    // Create a row
    const row = document.createElement('div');
    div.className = "row hidden-md-up";
    for (let col = 0; col < colCount; col++) {
        // Create a column
        const cellId = `${row}-${col}`;
        const cell = document.createElement('div');
        cell.className = "col";
        cell.id = cellId;
        row.appendChild(cell);
    }
    document.getElementById('add-row').appendChild(row);
}

$(document).ready(function() {
    
});
