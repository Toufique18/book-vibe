const getStoredBookList = () => {
    const storedBookList = localStorage.getItem('bookList');
    return storedBookList ? JSON.parse(storedBookList) : { readList: [], wishlist: [] };
};

const saveBookList = (listType, id) => {
    const storedBookLists = getStoredBookList();

    if (listType === "read-list") {
        if (!storedBookLists.readList.includes(id)) {
            storedBookLists.readList.push(id);
            localStorage.setItem('bookList', JSON.stringify(storedBookLists));
        }
    } else if (listType === "wishlist") {
        if (!storedBookLists.wishlist.includes(id)) {
            storedBookLists.wishlist.push(id);
            localStorage.setItem('bookList', JSON.stringify(storedBookLists));
        }
    }
};

export { saveBookList, getStoredBookList };