

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
    console.log("testing...")
}