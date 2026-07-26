function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}
updateTime();
setInterval(updateTime, 1000);

dragElement(document.getElementById("draggableClock"));

function dragElement(element) {

    var startMouseX = 0;
    var startMouseY = 0;
    var startElemX = 0;
    var startElemY = 0;
    
    element.onmousedown = startDragging; 

    function startDragging(e) { 
        e = e || window.event; 
        e.preventDefault();
        
        startMouseX = e.clientX;
        startMouseY = e.clientY; 
        
        startElemX = element.offsetLeft;
        startElemY = element.offsetTop;

        document.onmouseup = stopDragging; 
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        var mouseMovedX = e.clientX - startMouseX;
        var mouseMovedY = e.clientY - startMouseY;
        
        element.style.position = "absolute";
        element.style.top = (startElemY + mouseMovedY) + "px";
        element.style.left = (startElemX + mouseMovedX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function openWindow(windowElement){
    windowElement.style.display = "block";
}

var profilePic = document.querySelector("#interactivepfp");
var contactWindow = document.querySelector("#contactWindow");

profilePic.addEventListener("click", function () {
    openWindow(contactWindow);
});

var closeBtn = document.querySelector("#closeContact");
closeBtn.addEventListener("click", function() {
    contactWindow.style.display = "none";
});
