const getStoredBookList = () => {
    const storedBookList = localStorage.getItem('bookList');
    return storedBookList ? JSON.parse(storedBookList) : { readList: [], wishlist: [] };
};

const saveBookList = (listType, id) => {
    const storedBookLists = getStoredBookList();

    if (listType === "readList") {
        if (!storedBookLists.readList.includes(id)) {
            storedBookLists.readList.push(id);
            localStorage.setItem('bookList', JSON.stringify(storedBookLists));
            return true;
        }
    } else if (listType === "wishlist") {
        if (!storedBookLists.wishlist.includes(id)) {
            storedBookLists.wishlist.push(id);
            localStorage.setItem('bookList', JSON.stringify(storedBookLists));
            return true;
        }
    }
    return false;
};

export { saveBookList, getStoredBookList };


