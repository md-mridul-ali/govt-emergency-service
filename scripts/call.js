
const callButtons=document.getElementsByClassName('call-button');
for(let callButton of callButtons)
{
    callButton.addEventListener('click', function(e){
        document.getElementById('call-btn1').classList.add("call-btn")
        //  get coin -
        const coinValue = parseInt(document.getElementById('coin-value').innerText);
        if (coinValue < 20) {
            alert("You have no sufficient coin for calling, you need at least 20 coin")
        }
        else{
            const title=callButton.parentNode.parentNode.childNodes[3].innerText;
            const subTitle=callButton.parentNode.parentNode.childNodes[5].innerText;
            const contactNumber=callButton.parentNode.parentNode.childNodes[7].innerText;

            alert(" 📞" + " " +"Calling"+" "+subTitle + " " + contactNumber +"...");
            const updateValue=coinValue-20;
            document.getElementById('coin-value').innerText=updateValue;

            // get call history
            const callHistoryParent=document.getElementById('call-history-parent');
            // get local time
            const today=new Date();
            const hours=today.getHours();
            const minutes=today.getMinutes();
            const seconds=today.getSeconds();
            // create new div inside call history parent
            const newCart=document.createElement("div");
            newCart.style.marginBottom="30px";
            newCart.style.backgroundColor="white";
            newCart.innerHTML=`
            <div class=" h-[80px] bg-gray-100 flex justify-between ml-10 items-center rounded-lg" id="add-call-history new-div">
                      <div>
                        <h2 class="ml-[10px]">${title}</h2>
                        <h2 class="ml-[10px]">${contactNumber}</h2> 
                      </div>
                      <div>
                        <h2 class="mr-[10px]">${hours}:${minutes}:${seconds}</h2>
                      </div>
                    </div>
        `;
        callHistoryParent.append(newCart);
        
        document.getElementById('clear-button')
        .addEventListener('click', function(){
          callHistoryParent.children[1].remove(newCart);
          callHistoryParent.children[1].remove(newCart);
        });
        }
        
    });
}