export interface Word {
    orig: string,
    trans: string,
}

export interface Dicty {
    title: string,
    readonly lang: string,
    category: string[],
    words: Word[],
}
