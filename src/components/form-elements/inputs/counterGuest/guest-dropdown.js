let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll(".select__item");

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();

/*buttons*/

const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;

            if (direction === "plus") {
                newValue = currentValue + 1;
            } else {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            }

            inp.value = newValue;
        })

    })
}

counter();


function num_word(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
}

import $ from 'jquery'

$('form input[type="number"]').change(function () {
    var count = 0;
    $('form input[type="number"]').each(function () {
        val = parseInt($(this).val());
        if (!isNaN(val)) {
            count = count + val;
        }
    });
    $('#js_result').html(count + '' + num_word(count, [гость, гостя, гостей]));
});

