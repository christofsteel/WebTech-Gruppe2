timeout = new Array();

function addTooltip(Id, tooltip, milliseconds) {
	document.addEventListener('DOMContentLoaded', function(e){
		addTooltip_(Id, tooltip, milliseconds);
	}, false);
}

function addTooltip_(Id, tooltip, milliseconds) {
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

	element.setAttribute("onmouseover", "showTooltip(event,'"+tooltipId+"', '"+tooltip+"',"+milliseconds+");");
	element.setAttribute("onmousemove", "moveTooltip(event,'"+tooltipId+"');");
	element.setAttribute("onmouseout", "hideTooltip('"+tooltipId+"');");
}
function showTooltip(e,tooltipId, tooltip, milliseconds) {
	var e = e? e : window.event;
	tooltipdiv = document.getElementById(tooltipId);
	tooltipdiv.style.left=(e.pageX+10)+"px";
	tooltipdiv.style.top=(e.pageY+10)+"px";
	timeout[tooltipId]=window.setTimeout("tooltipdiv.style.display=\"block\"", milliseconds);
}

function hideTooltip(tooltipId) {
	window.clearTimeout(timeout[tooltipId]);
	tooltipdiv = document.getElementById(tooltipId);	
	tooltipdiv.style.display="none";
}
function moveTooltip(e,tooltipId) {
	var e = e? e : window.event;
	tooltipdiv = document.getElementById(tooltipId);
	tooltipdiv.style.left=(e.pageX+10)+"px";
	tooltipdiv.style.top=(e.pageY+10)+"px";

}
