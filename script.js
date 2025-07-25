const acceptBtn = document.getElementById("accept");
const declineBtn = document.getElementById("decline");
const ringtone = new Audio("ringtone.mp3");

window.onload = () => {
    ringtone.loop = true;
    ringtone.play();
};

acceptBtn.onclick = async () => {
    ringtone.pause();
    document.getElementById("call-screen").style.display = "none";
    document.getElementById("video-call").style.display = "block";

    // Access webcam
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        document.getElementById("local-video").srcObject = stream;
    } catch (err) {
        alert("Could not access camera/mic: " + err);
    }
};

declineBtn.onclick = () => {
    ringtone.pause();
    document.getElementById("call-screen").innerHTML = "<h2>Call Declined</h2>";
};
