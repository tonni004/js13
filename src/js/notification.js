import { error, info, success } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

function errorNtf() {
    error({
        title: 'Images not found :(',
        text: 'Please try again!',
        animation: 'fade',
        delay: 3000,
    });
}

function infoNtf() {
    info({
        title: 'You have set an incorrect search range',
        text: 'Please try again!',
        animation: 'fade',
        delay: 3000,
    });
}

function successNtf(text) {
    success({
        title: 'Success!',
        text: text,
        animation: 'fade',
        delay: 3000,
    });
}

export { errorNtf, infoNtf, successNtf };