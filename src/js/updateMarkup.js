import refs from './refs';
import loadMoreBtn from './loadMoreBtnFunction';
import cards from '../templates/cards.hbs';
import { errorNtf } from './notification';

export default function updateMarkup(imageSearch) {
    const markup = cards(imageSearch);

    refs.gallery.insertAdjacentHTML('beforeend', markup);


    if (imageSearch.total === 0) {
        loadMoreBtn.hideBtn();
        errorNtf();
        return;
    }

    if (imageSearch.total < 12) {
        loadMoreBtn.hideBtn();
        return;
    }
    loadMoreBtn.showBtn();

}

