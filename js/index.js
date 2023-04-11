window.onload = pageLoaded;

function pageLoaded() {
    const playerID = document.querySelector("#ratPlayer");
    var objectWidth = document.getElementById("ratPlayer").offsetWidth;
    var objectHeight = document.getElementById("ratPlayer").offsetHeight;

    const mainBoardArea = document.querySelector("#mainBoard");
    var containerWidth = mainBoardArea.clientWidth;
    var containerHeight = mainBoardArea.clientHeight;

    var maxX = containerWidth - objectWidth;
    var maxY = containerHeight - objectHeight;

    const pos = {x:0, y:0};
    var count = 0;

    // Event listener when rat moves
    document.addEventListener("keydown", (ev) => {

        const dir = (ev.key.match(/(?<=^Arrow)\w+/)||[])[0];
        if (!dir) return; // Not an arrow key.
        
        ev.preventDefault(); // Prevent Browser scroll if overflow

        ({
            Left:  () => pos.x -= 5,
            Right: () => pos.x += 5,
            Up:    () => pos.y -= 5,
            Down:  () => pos.y += 5,
        }[dir])(); 

        // prevent rat from escaping boundaries of game
        if (pos.x < 0) {
            pos.x = 0;
        } 
        else if (pos.x > maxX) {
            pos.x = maxX;
        }
    
        if (pos.y < 0) {
            pos.y = 0;
        } else if (pos.y > maxY) {
            pos.y = maxY;
        }

        playerID.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(0.5)`;
        
        // setting intersection point for rat and obstacles
        if((document.getElementById("obstacle-1").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y <= 30 && document.getElementById("obstacle-1").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y >= -30) && (document.getElementById("obstacle-1").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x <= 30 && document.getElementById("obstacle-1").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x >= -30)) {
            intersection();
        }
        if((document.getElementById("obstacle-2").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y <= 30 && document.getElementById("obstacle-2").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y >= -30) && (document.getElementById("obstacle-2").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x <= 30 && document.getElementById("obstacle-2").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x >= -30)) {
            intersection();
        }
        if((document.getElementById("obstacle-3").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y <= 30 && document.getElementById("obstacle-3").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y >= -30) && (document.getElementById("obstacle-3").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x <= 30 && document.getElementById("obstacle-3").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x >= -30)) {
            intersection();
        }
        if((document.getElementById("obstacle-4").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y <= 30 && document.getElementById("obstacle-4").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y >= -30) && (document.getElementById("obstacle-4").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x <= 30 && document.getElementById("obstacle-4").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x >= -30)) {
            intersection();
        }
        if((document.getElementById("obstacle-5").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y <= 30 && document.getElementById("obstacle-5").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y >= -30) && (document.getElementById("obstacle-5").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x <= 30 && document.getElementById("obstacle-5").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x >= -30)) {
            intersection();
        }
        
        if((document.getElementById("grabcheese").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y <= 40 && document.getElementById("grabcheese").getBoundingClientRect().y - document.getElementById("ratPlayer").getBoundingClientRect().y >= -40) && (document.getElementById("grabcheese").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x <= 40 && document.getElementById("grabcheese").getBoundingClientRect().x - document.getElementById("ratPlayer").getBoundingClientRect().x >= -40)) {
            // you win here
            document.getElementById("loose").classList.add("hideText");
            document.getElementById("resultBoard").classList.add("showResults");
        }
        
    });

    // Function if rat collides with any bells or obstacles
    function intersection() {
        alert("COLLISION!!!");
        count++;
        if(count == 1) {
            document.getElementById("alertLife").classList.add("displayClass");
            document.getElementById("heart1").classList.add("heartGoneClass");
        }
        if(count == 2) {
            document.getElementById("alertLife").classList.add("displayClass");
            document.getElementById("heart2").classList.add("heartGoneClass");
        }
        if(count == 3) {
            document.getElementById("heart3").classList.add("heartGoneClass");
            wakeUpCat();
        }
        playerID.style.transform = `translate(0px, 0px) scale(0.5)`;
        setInterval(function() {document.getElementById("alertLife").classList.remove("displayClass");}, 2000);
    }

    function wakeUpCat() {
        document.getElementById("catEye").classList.add("changeEyes");
        document.getElementById("catBody").classList.add("noAnimation");
        document.getElementById("catBubble").classList.add("hideBubble");
        document.getElementById("win").classList.add("hideText");
        setInterval(function() {document.getElementById("resultBoard").classList.add("showResults");}, 1000);
    }
}