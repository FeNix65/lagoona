let header_media_btn = document.querySelector(".header-media-btn"); //обращаемся к html элеменнту через класс
let header_slide = document.getElementById('header-slide'); //обращаемся к html элеменнту через ID
let isSlideVisible = false; //создаем переменную со значением false

header_media_btn.addEventListener('click', function(){  // lобавляем обработчик события клика на кнопку
    if(!isSlideVisible) { //условие если слайдер не виден
        header_slide.style.display = "block"; // отображаем слайдер
        isSlideVisible = true; //меняем значчение на true
    } else { // иначе если слайдер виден
        header_slide.style.display = "none"; // скрываем слайдер
        isSlideVisible = false; //возвращаем значение переменной false
    }
});
