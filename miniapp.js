let resEl=document.querySelector(".resultclass"),btnEl=document.querySelector("#btn"),inputEl=document.querySelector(".number"),clearEl=document.querySelector("#clear");function removeChild(){resEl.innerHTML=""}function getImages(){let e="",t=+inputEl.value,l=new URL("https://picsum.photos/v2/list");l.searchParams.set("limit",t),t<10?fetch(l).then(e=>(console.log(e.status),e.json())).then(t=>{t.forEach(t=>{let l=`\n         <div class="card-wrap">\n        <img\n          src="${t.download_url}"\n          class="card-image"\n        />\n        <p>${t.author}</p>\n      </div> `;e+=l}),resEl.innerHTML=e}).catch(e=>{console.log(`ошибка, статус запроса - ${e.status}`)}):alert("Введите число от 1 до 9")}btnEl.addEventListener("click",getImages),clearEl.addEventListener("click",removeChild);