let select = function () {
    let selectHeader = document.querySelectorAll('.checkbox__header');
    let selectItem = document.querySelectorAll('.checkbox__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    // function selectChoose() {
    //     let text = this.innerText,
    //         select = this.closest('.checkbox'),
    //         currentText = select.querySelector('.checkbox__current');
    //     currentText.innerText = text;
    //     select.classList.remove('is-active');
    // }
};

select();
