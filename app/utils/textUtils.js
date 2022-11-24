export function firstToUpperCase(text){
    const capitalized =
    text.charAt(0).toUpperCase()
    + text.slice(1)
    return capitalized
}

export function beautifyText(text){
    let re = /(^|[.!?]\s+)([a-z])/g;
    const val = text.replace(re, (m, $1, $2) => $1 + $2.toUpperCase());
    return val
};



