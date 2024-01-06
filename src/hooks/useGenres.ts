import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import Genres from '../data/Genres';

const apiClient = new APIClient<Genre>('/genres')

export interface Genre{
    id: number;
    name:string;
    image_background: string;
}



const useGenres = () => useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000,//24h
    initialData:{count:Genres.length, results: Genres}
})



export default useGenres;