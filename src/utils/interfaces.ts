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

export type Setup = {
    stack: string[],
    link: string,
}
