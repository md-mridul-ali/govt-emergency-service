
const hearts=document.getElementsByClassName('hearts');
for(let heart of hearts)
{
    heart.addEventListener('click', function(){
        const navHeartLogoCount = parseInt(document.getElementById('nav-heart-logo-count').innerText);
        const updateValue = navHeartLogoCount + 1;
        document.getElementById('nav-heart-logo-count')
        .innerText = updateValue;
    })
}