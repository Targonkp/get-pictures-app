let resEl = document.querySelector('.resultclass');
let btnEl = document.querySelector('#btn');
let inputEl = document.querySelector('.number');
let clearEl = document.querySelector('#clear');

function removeChild(){
    resEl.innerHTML = '';
}


function getImages () {
    let cards = '';
    //преобразую результат в тип данных number
    let inputValue = +inputEl.value;
    //Добавляю параметры к URL типа ?name=value
    let url = new URL('https://picsum.photos/v2/list');
    url.searchParams.set('limit', inputValue);

    if (inputValue < 10){
        fetch(url)
            .then((response) => {
                //получаю статус ответа
                console.log(response.status);

                //декодирую ответ  в формате JSON
                return response.json();
            })
            .then((result) => {
                //применяю к каждому элементу функцию callback

                result.forEach(item => {
                        //создаю img для каждого элемента и прописываю в него url картинки
                        let newimage = `
         <div class="card-wrap">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div> `;
                        //собираю все элементы
                        cards = cards + newimage;
                    }
                )
                //добавляю список элементов к div с классом resultclass для вывода на экран
                resEl.innerHTML = cards;

            })


            .catch((error) => {
                console.log(`ошибка, статус запроса - ${error.status}`)
            })
    }
    else
    {
        alert('Введите число от 1 до 9');
    }
}

//навешиваю функцию с асинхронным fetch запросом на кнопку

btnEl.addEventListener(
    'click',
    (event) => {
        event.preventDefault();
        getImages();
    }
)

clearEl.addEventListener(
    'click',
    removeChild
)

//навешиваю обработчик событий на обертку (div с классом change-theme-wrap) с двумя переключателями тем
document.querySelector('.change-theme-wrap').addEventListener(
    'click',
    (event)=>{
        document.querySelectorAll('.change-theme').forEach(item => item.classList.remove('change-theme-active'));
        let changeTheme = event.target.classList.item(1);
        if (changeTheme === "change-theme-light"){
            document.body.style.background = '#eff28f';
            event.target.classList.toggle('change-theme-active');
        }
        else{
            document.body.style.background = '#6d705f';
            event.target.classList.toggle('change-theme-active');
        }
}
)