/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let ret: number[] = [];
    if (numbers.length > 0) {
        ret.push(numbers[0]);
    }
    if (numbers.length > 1) {
        ret.push(numbers[numbers.length - 1]);
    }
    if (numbers.length === 1) {
        ret.push(numbers[0]);
    }
    return ret;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tricky: number[] = numbers.map((int: number): number => int * 3);
    return tricky;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let trick: number[] = numbers.map((str: string): number =>
        isNaN(Number(str)) ? 0 : Number(str),
    );
    return trick;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let arr: string[] = amounts.map((str: string): string =>
        str[0] === "$" ? str.slice(1) : str,
    );
    let arr2: number[] = arr.map((stripe: string): number =>
        isNaN(Number(stripe)) ? 0 : Number(stripe),
    );
    return arr2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let r: string[] = messages.filter(
        (msg: string): boolean => msg[msg.length - 1] != "?",
    );
    r = r.map((msg: string): string =>
        msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg,
    );
    return r;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let words2: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return words2.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let cols: string[] = colors.filter(
        (color: string): boolean =>
            color.toLowerCase() === "blue" ||
            color.toLowerCase() === "red" ||
            color.toLowerCase() === "green",
    );
    return cols.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum: number = 0;
    addends.map((jawn: number): number => (sum += jawn));
    let rv: string = "";
    rv += sum.toString() + "=";
    addends.map((jawn: number): string => (rv += jawn.toString() + "+"));
    rv = rv.slice(0, rv.length - 1);
    return rv;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let values1: number[] = values.map((value: number): number => value);
    let sum: number = 0;
    let mult: number = 1;
    values1.map((value: number): number =>
        value < 0 ? (mult = 0) : (sum += value * mult),
    );
    let m: number = values1.findIndex((value: number): boolean => value < 0);
    if (m === -1) {
        values1.push(sum);
        return values1;
    }
    values1.splice(m + 1, 0, sum);
    return values1;
}
