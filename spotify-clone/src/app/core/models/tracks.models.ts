import { ArtistModel } from "./artist.models";

export interface ModelTracks {
    name: string,
    album: string,
    cover: string,
    url: string,
    _id: string | number,
    artist?:ArtistModel 
}