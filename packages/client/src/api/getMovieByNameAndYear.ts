import { API_KEY, API_URL } from '@/constant'
import { axiosClient } from './axios'

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieData {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface ApiResult {
  data: MovieData
}

interface getMovieByNameAndYearParams {
  name: string
  year: number | undefined
  page?: number
}

export const getMovieByNameAndYear = async ({
  name,
  year,
  page = 1
}: getMovieByNameAndYearParams): Promise<ApiResult> => {
  const url = year
    ? `${API_URL}?query=${name}&year=${year}&page=${page}`
    : `${API_URL}?query=${name}&page=${page}`

  return axiosClient.get(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  })
}
