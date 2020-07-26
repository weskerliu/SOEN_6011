

/*var input = document.getElementById("searchInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
       search();
    }
});*/

function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        search();
        return false;
    }
}

function search(){

    var searchText = document.getElementById("searchInput").value;
    console.log("searching for ..."+searchText);

    location.href = "search-page-1.html";


}