console.log(`В списке ${document.querySelectorAll('li.item').length} категории`);

const FindItem = document.querySelectorAll('.item').forEach(item =>
    console.log(
        `Категория: ${item.querySelector('h2').textContent}\nКоличество элементов: ${item.querySelectorAll('li').length}`
    ));