import {
    AsyncStorage
} from 'react-native';

export function getDeck(title) {
    return AsyncStorage.getItem(title).then((r) => {
        return JSON.parse(r);
    }).then((r) => {
        return r;
    });
}

/**
 * @description Gets all avaible decks.
 * @returns an Object with the response
 */
export function getAllDecks() {
   
    return AsyncStorage.getAllKeys().then((keys) => {
       
        return AsyncStorage.multiGet(keys).then((r) => {
        
            const obj = r.map((el)=>{
                
                
                return JSON.parse(el[1]);
                
            });
            return obj;
        })

    })

}


/**
 * @description Creates a new Deck
 */
export function createDeck(title) {
    return AsyncStorage.setItem(title, JSON.stringify({
        title: title,
        cards: []
    }));
}


/**
 * @description Create a new card in a given Deck
 */
export function createCard(title, card) {
        
    return getDeck(title).then((r) => {
        const moreCards = r.cards.concat(card);
        const newObject = {title,cards:moreCards};
        return AsyncStorage.mergeItem(title, JSON.stringify(newObject))
    })


}

/**
 * @description Populates the storage with sample Data
 */
export function initStorage() {
    console.log('API is initializing Data.');
    AsyncStorage.clear();
    //Dummy Data
    const js = JSON.stringify({
        title: 'javascript',
        cards: [{
            question: '= and == is the same',
            tip: 'Asignation and comparison are not the same',
            result: false
        }]
    });
    const re = JSON.stringify({
        title: 'react',
        cards: []
    });
    const ex = JSON.stringify({
        title: 'express',
        cards: [{
            question: 'Express is totally different than Node',
            tip: 'Express is build on top of Node',
            result: false
        }]
    });
   
    //Setting up dummy info
    return AsyncStorage.multiSet([['javascript', js], ['react', re], ['express', ex]],(err)=>{
        console.log('API done creating dummy data',err);
        
    })

}


