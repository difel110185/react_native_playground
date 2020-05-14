import {db} from '../db';
export const addItem = (item) => {
    db.ref('/items').push({
        name: item
    });
};
export const listItems = () => {
    return new Promise((resolve) => {
        db.ref('/items').on('value', (snapshot) => {
            let itemsArray = [];
            Object.keys(snapshot.val()).forEach(function eachKey(key) {
                itemsArray.push({
                    id: key,
                    values: snapshot.val()[key]
                })
            });
            resolve(itemsArray);
        });
    });
};

export const deleteItem = (key) => {
    db.ref('/items').child(key).remove();
};
