import refs from './refs';

const loadMoreBtn = {
    showBtn() {
        refs.loadBtn.classList.remove('is-hidden');
    },
    hideBtn() {
        refs.loadBtn.classList.add('is-hidden');
    }
}

export default loadMoreBtn;
