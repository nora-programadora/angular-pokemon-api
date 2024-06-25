export interface PokeList {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
