/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    document.body.append(button);

    button.addEventListener('click', () => button.remove());
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i];
        ul.append(li);
        li.addEventListener('mouseover', function () {
            li.title = arr[i];
        });
    }
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a_link = document.createElement('a');
    a_link.innerHTML = 'tensor';
    a_link.setAttribute('href', 'https://tensor.ru/');
    document.body.append(a_link);

    function add_href(event) {
        a_link.innerHTML = 'tensor https://tensor.ru/';
    }

    a_link.addEventListener('click', add_href);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    document.body.append(ul);
    let li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul.append(li);
    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    document.body.append(button);
    let li_2;

    li.addEventListener('click', () => {
        li.innerHTML = 'Пункт!';
    });

    button.addEventListener('click', () => {
        let li_2 = document.createElement('li');
        li_2.innerHTML = 'Пункт';
        ul.append(li_2);

        li_2.addEventListener('click', () => {
            li_2.innerHTML = 'Пункт!';
        });
    });
}
