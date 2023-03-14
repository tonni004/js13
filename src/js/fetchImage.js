import refs from './refs';
import { infoNtf, successNtf } from './notification';
import newService from './new-service';
import loadMoreBtn from './loadMoreBtnFunction';
import updateMarkup from './updateMarkup';

refs.mySearch.addEventListener('submit', searchImg);
refs.loadBtn.addEventListener('click', (e) => {
    const top = e.target.getBoundingClientRect().top;
    const width = e.target.getBoundingClientRect().width;

    newService.fetchImage()
        .then(updateMarkup)
        .then(() => {
            scrollPage(top, width);
        })
})

function searchImg(e) {
    e.preventDefault();

    const form = e.currentTarget;
    newService.query = form.elements.query.value;

    cleanGallery();
    form.reset();

    if (newService.query === "" || newService.query === " ") {
        infoNtf();
        loadMoreBtn.hideBtn();
        return;
    }

    newService.resetPage();

    newService.fetchImage().then(data => {
        if (data.total > 0) {
            const text = `Found ${data.total} images`;
            successNtf(text);
        }
        updateMarkup(data);
    });

}

function scrollPage(top, width) {
    window.scrollTo({
        top: top + window.pageYOffset,
        left: width + window.pageXOffset,
        behavior: "smooth",
    });
}

function cleanGallery() {
    refs.gallery.innerHTML = '';
}

