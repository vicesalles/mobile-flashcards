import {
    AsyncStorage
} from 'react-native';

export function getDeck(title) {
    return AsyncStorage.getItem(title).then((r) => r)
}

/**
 * @description Gets all avaible decks.
 * @returns an Object with the response
 */
export function getAllDecks() {

    //Got this from 'https://facebook.github.io/react-native/releases/0.27/docs/asyncstorage.html'
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
            return stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                let key = store[i][0];
                let value = store[i][1];
                return {
                    key: value
                }
            });
        });
    });
}


/**
 * @description Creates a new Deck
 */
export function createDeck(title) {
    console.log('deck Created:', title)
    return AsyncStorage.setItem(title, JSON.stringify({
        title: title,
        questions: []
    }));
}


/**
 * @description Create a new card in a given Deck
 */
export function createCard(title, card) {
    getDeck(title).then((r) => {

        return AsyncStorage.mergeItem(title, JSON.stringify({
            ...r,
            ['questions']: [
                ...r['questions'],
                card
            ]
        }))


    })


}

/**
 * @description Populates the storage with sample Data
 */
export function initStorage() {
    
    console.log('initStorage');

    return createDeck('Javascript').then(() => {
        
        createCard('Javascript', {
            question: '= and == are the same',
            tip: 'Comparison and asignation ain\'t the same',
            answer: false
        }).then(() => {
            createCard('Javascript', {
                question: 'a++ equals a= a+1',
                tip: 'The same for --',
                answer: true
            })
        })
    }).then(() => {
        createDeck('React').then(() => {
            createCard('React', {
                question: 'state should uptade',
                tip: 'Try with props',
                answer: false
            }).then(() => {
                createCard('React', {
                    question: 'props are inherited',
                    tip: 'That\'s it',
                    answer: true
                })
            })
        })
    })

}
