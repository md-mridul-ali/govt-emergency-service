
const copyBtns=document.getElementsByClassName('copy-btn');
for(let copyBtn of copyBtns)
{
    copyBtn.addEventListener('click', function(){
        const copyCount = parseInt(document.getElementById('copy-count').innerText);
        // get number
        const title=copyBtn.parentNode.parentNode.childNodes[7].innerText;
        // number copy
        navigator.clipboard.writeText(title);
        alert("✅ Number copied: " + title);   
        const updateValue = copyCount + 1;
        document.getElementById('copy-btn1').classList.add("copy-btn");
        document.getElementById('copy-count').innerText = updateValue;
        
    })
}