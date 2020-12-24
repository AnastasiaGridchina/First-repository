//inputs mask

// let inputs = document.querySelectorAll('input[type = "data"]');
// let im = new Inputmask('ДД.ММ.ГГГГ');
// im.mask(inputs);
import $ from 'jquery';
import Inputmask from "inputmask";

$(function() {
    Inputmask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" }).mask("#data");
});