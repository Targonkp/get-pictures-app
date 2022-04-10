let resEl=document.querySelector('.resultclass');let btnEl=document.querySelector('#btn');let inputEl=document.querySelector('.number');let clearEl=document.querySelector('#clear');function removeChild(){resEl.innerHTML=''}
function getImages(){let cards='';let inputValue=+inputEl.value;let url=new URL('https://picsum.photos/v2/list');url.searchParams.set('limit',inputValue);if(inputValue<10){fetch(url).then((response)=>{console.log(response.status);return response.json()}).then((result)=>{result.forEach(item=>{let newimage=`
         <div class="card-wrap">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div> `;cards=cards+newimage})
    resEl.innerHTML=cards}).catch((error)=>{console.log(`ошибка, статус запроса - ${error.status}`)})}else{alert('Введите число от 1 до 9')}}
btnEl.addEventListener('click',(event)=>{event.preventDefault();getImages()})
clearEl.addEventListener('click',removeChild)
document.querySelector('.change-theme-wrap').addEventListener('click',(event)=>{document.querySelectorAll('.change-theme').forEach(item=>item.classList.remove('change-theme-active'));let changeTheme=event.target.classList.item(1);if(changeTheme==="change-theme-light"){document.body.style.background='#eff28f';event.target.classList.toggle('change-theme-active')}else{document.body.style.background='#6d705f';event.target.classList.toggle('change-theme-active')}})