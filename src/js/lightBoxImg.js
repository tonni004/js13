// const basicLightbox = require('basiclightbox')

import * as basicLightbox from 'basiclightbox';
import refs from './refs';

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {

    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }

    if (e.target.nodeName === "IMG") {
        const img = e.target;
        const largeImg = img.dataset.source;
        const altImg = img.alt;
        const instance = basicLightbox.create(`<img src="${largeImg} alt="${altImg}" width="1600" height="900"/>`);
        instance.show();
    };


}



