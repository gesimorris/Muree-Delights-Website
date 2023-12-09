function lastdate(){
    var date = new Date(document.lastModified);
    document.getElementById("placeholder").innerHTML = date;
}

function changeImage(){
    document.getElementById("slideshow").src = "slide2.jpeg";
}
