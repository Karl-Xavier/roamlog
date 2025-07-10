import axios from 'axios'
import type { GeoResponse } from '@/utils/GeoResponse'

export async function getLocationByName(name: string): Promise<GeoResponse | undefined>{

  const apiKey = import.meta.env.VITE_OPENMAP_APIKEY

  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${name}&apiKey=${apiKey}`

  try {
    
    const response = await axios.get<GeoResponse>(url)

    return response.data

  } catch (err: any) {

    console.log(err)
    
    throw new Error(err)

  }

}