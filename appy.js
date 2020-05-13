(()=>{
    var skinBtn = document.getElementById("skinBtn");
    var danceBtn = document.getElementById("danceBtn");
    var weaponsBtn = document.getElementById("weaponsBtn");
    var buildingBtn = document.getElementById("buildingBtn");
    var homeBtn = document.getElementById("home");

    var skinSection = document.getElementById("skinSection");
    var danceSection = document.getElementById("danceSection");
    var weaponsSection = document.getElementById("weaponsSection");
    var buildingSection = document.getElementById("buildingSection");
    var introSection = document.getElementById("introSection");
    var headerSection = document.getElementById("header");

    skinSection.classList.add("d-none");
    danceSection.classList.add("d-none");
    weaponsSection.classList.add("d-none");
    buildingSection.classList.add("d-none");

    homeBtn.addEventListener("click", ()=>{
        headerSection.classList.remove("d-none");
        introSection.classList.remove("d-none");
        skinSection.classList.add("d-none");
        danceSection.classList.add("d-none");
        weaponsSection.classList.add("d-none");
        buildingSection.classList.add("d-none");
    })

    skinBtn.addEventListener('click', ()=>{
        headerSection.classList.add("d-none");
        introSection.classList.add("d-none");
        skinSection.classList.remove("d-none");
        danceSection.classList.add("d-none");
        weaponsSection.classList.add("d-none");
        buildingSection.classList.add("d-none");
    });

    danceBtn.addEventListener('click', ()=>{
        headerSection.classList.add("d-none");
        introSection.classList.add("d-none");
        skinSection.classList.add("d-none");
        danceSection.classList.remove("d-none");
        weaponsSection.classList.add("d-none");
        buildingSection.classList.add("d-none");
    });

    weaponsBtn.addEventListener('click', ()=>{
        headerSection.classList.add("d-none");
        introSection.classList.add("d-none");
        skinSection.classList.add("d-none");
        danceSection.classList.add("d-none");
        weaponsSection.classList.remove("d-none");
        buildingSection.classList.add("d-none");
    });

    buildingBtn.addEventListener('click', ()=>{
        headerSection.classList.add("d-none");
        introSection.classList.add("d-none");
        skinSection.classList.add("d-none");
        danceSection.classList.add("d-none");
        weaponsSection.classList.add("d-none");
        buildingSection.classList.remove("d-none");
    })
})();