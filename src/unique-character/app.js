'use strict';

// Find the first non-repeated character in a String
class CharacterFinder {
    constructor(str) {
        this.data = {};
        for(const character of str) {
            this.put(character);
        }
    }
    put(character) {
        if (this.data[character] === undefined) {
            this.data[character] = 1;
        } else {
            this.data[character] ++;
        }
    }
    find() {
        for(const character in this.data) {
            if(this.data.hasOwnProperty(character)) {
                if(this.data[character] === 1) {
                    return character;
                }
            }
        }
        return null;
    }
}

const characterFinder = new CharacterFinder('addfiggafixl');
console.log(characterFinder.find());