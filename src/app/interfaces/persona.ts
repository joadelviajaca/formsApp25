export interface Persona {
    nombre: string;
    favoritos: Favorito[];
}

export interface Favorito{
    id: number;
    nombre: string;
}

export interface Person {
    genre: string;
    notifications: boolean;
}
