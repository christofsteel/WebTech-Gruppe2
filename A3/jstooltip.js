timeout = new Array();
function addTooltip(Id, tooltip,  milliseconds) {
	var element=document.getElementById(Id);
	tooltipId = "tooltip"+Id;

	var tooltipdiv = document.createElement("div");
	tooltipdiv.id=tooltipId;
	tooltipdiv.innerHTML=tooltip;
	tooltipdiv.style.position="absolute";
	tooltipdiv.style.backgroundColor="#ffffff";
	tooltipdiv.style.border="1px solid #72B0E6";
	tooltipdiv.style.font="12px Verdana";
	tooltipdiv.style.color="#1A80DB";
	tooltipdiv.style.display="none";
	document.body.appendChild(tooltipdiv);

	element.setAttribute("onmouseover", "showtooltip('"+tooltipId+"', '"+tooltip+"',"+milliseconds+");");
	element.setAttribute("onmousemove", "movetooltip('"+tooltipId+"');");
	element.setAttribute("onmouseout", "hidetooltip('"+tooltipId+"');");
}
function showtooltip(tooltipId, tooltip, milliseconds) {
	var e = window.event;
	tooltipdiv = document.getElementById(tooltipId);
	tooltipdiv.style.left=(e.clientX+10)+"px";
	tooltipdiv.style.top=(e.clientY+10)+"px";
	timeout[tooltipId]=window.setTimeout("tooltipdiv.style.display=\"block\"", milliseconds);
}

function hidetooltip(tooltipId) {
	window.clearTimeout(timeout[tooltipId]);
	tooltipdiv = document.getElementById(tooltipId);	
	tooltipdiv.style.display="none";
}
function movetooltip(tooltipId) {
	var e = window.event;
	tooltipdiv = document.getElementById(tooltipId);
	tooltipdiv.style.left=(e.clientX+10)+"px";
	tooltipdiv.style.top=(e.clientY+10)+"px";

}
