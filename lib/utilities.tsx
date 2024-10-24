import { useEffect, useState } from 'react';

/**
 * NAME: useDebounce
 * DESCRIPTION: This utility function creates a "debounced" value for an input field whose value lags behind the
 * input field by a specified delay. It is helpful for conducting a search as the user types, vs. requiring them
 * to click on a "search" button in the UI.
 * PARAMETERS: value -> the value of the input field; delay -> an integer representing how far behind the
 * debounced value should be from the real-time value of the input field
 */
const useDebounce = function<T>(value: T, delay: number): T {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Only re-call effect if value or delay changes

    return debouncedValue;
};

const DEFAULT_OPTIONS = {
    config: { attributes: true, childList: true, subtree: true },
};

/**
 * NAME: useMutationObservable
 * DESCRIPTION: This React hook observes a DOM element and executes a callback function when the element
 * changes in the DOM.
 * PARAMETERS: targetEl -> the DOM element to be tracked; cb -> the name of the callback function to execute
 * when the targetEl changes; options -> information about the targetEl to return
 */
function useMutationObservable(
    targetEl: Element | null,
    cb: MutationCallback,
    options = DEFAULT_OPTIONS
): void {
    const [observer, setObserver] = useState<MutationObserver | null>(null);

    useEffect(() => {
        if (!cb || typeof cb !== "function") {
            console.warn(
                `You must provide a valid callback function, instead you've provided ${cb}`
            );
            return;
        }
        const obs = new MutationObserver(cb);
        setObserver(obs);
    }, [cb, options, setObserver]);

    useEffect(() => {
        if (!observer) return;
        if (!targetEl) {
            console.warn(
                `You must provide a valid DOM element to observe, instead you've provided ${targetEl}`
            );
        }
        const { config } = options;
        try {
            observer.observe(targetEl as Node, config);
        } catch (e) {
            console.error(e);
        }
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [observer, targetEl, options]);
}

/**
 * NAME: lockScroll
 * DESCRIPTION: Utility function that prevents the user from scrolling the page in any direction
 */
const lockScroll = (): void => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
};

/**
 * NAME: unlockScroll
 * DESCRIPTION: Utility function to unlock scrolling if it has been locked.
 */
const unlockScroll = (): void => {
    window.onscroll = function () {};
};

const capitalizeFirstLetter = (incomingString: string) => {
    let result = incomingString.charAt(0).toUpperCase();

    for (let i = 1; i < incomingString.length; i++) {
        const currentChar = incomingString.charAt(i);
        const previousChar = incomingString.charAt(i - 1);

        // Insert a space before uppercase letters that are not at the beginning
        if (currentChar === currentChar.toUpperCase() && previousChar !== ' ') {
            result += ' ';
        }

        result += currentChar;
    }

    return result;
};

export {
    useDebounce,
    useMutationObservable,
    lockScroll,
    unlockScroll,
    capitalizeFirstLetter,
};