var url = 'http://api.icndb.com/jokes/random';

/* When document is finnished loading */
document.addEventListener('DOMContentLoaded', function() {
    /* 1. render the UL list */
    RenderUlElement();

    /* Get the Joke */
    GetJoke();

 }, false);

 /* The Rendering of the UL element, and attachment to the body. */
function RenderUlElement(){
    var ul = document.createElement("ul");
    ul.id = "joke-list";
    document.body.appendChild(ul);
};

/* The rendering of the Li element and attachment to the UL */
function RenderLiElement(joke){
    var jokelist = document.querySelector("#joke-list");
    var joke = document.createTextNode(joke)
    jokelist.appendChild(joke)
}

/* Return a joke */
function GetJoke(p){

    var query = document.querySelector("#firstname").value != "" ? "?firstname=" + document.querySelector("#firstname").value : "";
    console.log(document.querySelector("#firstname").value);
    // var lastname = document.querySelector("#lastname");
    // var query = document.querySelector("#firstname") !== undefined ? document.querySelector("#firstname") : "";

    SendRequest(query, (res)=>{
        RenderLiElement(res.value.joke)
    });

}


/* SendRequest responsible for sending the http request */
function SendRequest(query, callback){
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', url + query);

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            callback(JSON.parse(xhr.response))
        }
    };

    xhr.onerror = function() {
        alert("Request failed");
    };
}
