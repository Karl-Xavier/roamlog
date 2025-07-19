import { useEffect, useState } from 'react'
import { 
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem
 } from '@/components/ui/command'
import { getLocationByName } from '@/service/getLocation';
import type { Geometry } from '@/utils/QueryGeo';
import type { Properties } from '@/utils/PropertiesInterface';

 interface FormData {
  title: string;
  description: string;
  cover: string | null;
  tags: string[];
  location: string;
  other_images: string[];
  lat: number | null;
  lon: number | null;
}

 type LocationFilterProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
 }

 type Feature = {
  type: string;
  properties: Properties;
  geometry: Geometry;
  bbox: number[];
}

export default function LocationFilter({ formData, setFormData }: LocationFilterProps) {

  const [predictions, setPredictions] = useState<Feature[]>([])

  useEffect(() => {

    const location = formData.location.trim()

    if(location.length > 2){
      async function fetchPrediction(){
        const getResults = await getLocationByName(formData.location)
  
        setPredictions(getResults?.features!)
      }

      fetchPrediction()
    }

  },[formData.location])

  function appendSearchValue(data: Feature){
    const locationData = `${data.properties.address_line1} ${data.properties.address_line2 && `${data.properties.address_line2}`}`

    setFormData(prev => ({ ...prev, location: locationData }))

    const latitude = data.properties.lat
    const longitude = data.properties.lon

    setFormData(prev => ({ ...prev, lat: latitude }))
    setFormData(prev => ({ ...prev, lon: longitude }))
  }

  console.log(predictions)

  return (
    <Command className='bg-transparent w-full md:w-[65%]'>
     <div className=' bg-transparent' style={{ boxShadow: 'none', border: '1px solid #4c6f59', padding: '5px 0 5px 0', borderRadius: '7px' }} >
      <CommandInput className='command-input text-[#4c6f59]' value={formData.location} onValueChange={(v) => setFormData(prev => ({ ...prev, location: v }))}/>
     </div>
      <CommandList className='bg-transparent' style={{ border: '1px solid #4c6f59', borderTop: 0, borderRadius: '7px' }}>
          <CommandGroup heading='Locations'>
            {predictions.length > 0 ? (
              predictions.map((predict, index) => (
                <CommandItem key={index} value={predict.properties.place_id} onSelect={() => appendSearchValue(predict)}>
                  {predict.properties.address_line1}&nbsp;
                  {predict.properties.address_line2 && `${predict.properties.address_line2}`}
                </CommandItem>
              ))
            ): (
              <p>No Result Found</p>
            )}
          </CommandGroup>
      </CommandList>
    </Command>
  )
}