import React, { Component } from 'react'

export default class TextCycler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChoice: props.choices[0]
        };

        this.cycleText(props.choices, 0);
    }

    render() {
        return <span>{this.state.currentChoice}</span>
    }

    cycleText(items, fromIndex) {
        var toIndex = (fromIndex + 1) % items.length;
        this.transitionOutText(items, fromIndex, toIndex, 0);
    }

    transitionOutText(items, fromIndex, toIndex, currentChar) {
        var garbage = "";
        for (var i = 0; i < currentChar; i++) {
            garbage += this.getGarbageCharacter();
        }
        this.setState({
            currentChoice: garbage + items[fromIndex].substring(currentChar + 1)
        });

        if (currentChar < items[fromIndex].length) {
            setTimeout(() => {
                this.transitionOutText(items, fromIndex, toIndex, currentChar + 1);
            }, 10);
        }
        else {
            setTimeout(() => {
                this.transitionInText(items, fromIndex, toIndex, 0);
            }, 10);
        }
    }

    transitionInText(items, fromIndex, toIndex, currentChar) {
        var garbage = "";
        for (var i = currentChar + 1; i < items[toIndex].length; i++) {
            garbage += this.getGarbageCharacter();
        }
        this.setState({
            currentChoice: items[toIndex].substring(0, currentChar + 1) + garbage
        });

        if (currentChar < items[toIndex].length) {
            setTimeout(() => {
                this.transitionInText(items, fromIndex, toIndex, currentChar + 1);
            }, 10);
        }
        else {
            setTimeout(() => {
                this.cycleText(items, toIndex);
            }, 2500);
        }
    }

    getGarbageCharacter() {
        var chars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '/', '+', '=', '>', '<'];
        return chars[Math.floor(Math.random() * chars.length)];
    }
}