var audio = new Audio("Updated Picture/Assets/main_menu_music.mp3");
    audio.volume = 0.1;
    audio.loop = true;
    audio.autoplay = true;

    let volume = document.getElementById('volume');
    volume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 1000;
    })