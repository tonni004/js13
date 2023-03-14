const apiKey = '33768901-808baf1139e90331ab0228bdb';

export default {
    searchQuery: '',
    page: 1,
    fetchImage() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

        return fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.page += 1;
                return data;
            })
            .catch(error => error);

    },
    resetPage() {
        this.page = 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
};