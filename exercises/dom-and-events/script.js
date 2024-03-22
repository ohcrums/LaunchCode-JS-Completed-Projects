function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    // 1
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    
    // 2

    // 3
    missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
    });
}

window.addEventListener("load", init);
