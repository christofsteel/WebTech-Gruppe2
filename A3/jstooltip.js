function addTooltip(Id, seconds) {
    var element=document.getElementById(Id);
    var myDiv = document.createElement("div");
    myDiv.setAttribute('id', 'tooltip');
    document.appendChild(myDiv);
}
