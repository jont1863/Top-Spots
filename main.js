$(document).ready(function() {
// write your code here
    $.getJSON('data.json', function(data){

        let tableBody = $('#top-spots');
       
        data.forEach(function(place) {
            let link = `https://www.google.com/maps?q=${place.location[0]},${place.location[1]}`;
            let row = `
                <tr>
                    <td class ="one">${place.name}</td>
                    <td class = "one">${place.description}</td>
                    <td class ="two"><a href="${link}" target="_blank">Open in Google Maps</a></td>
                </tr>
            `;
            tableBody.append(row);
        });
    });
});
 
