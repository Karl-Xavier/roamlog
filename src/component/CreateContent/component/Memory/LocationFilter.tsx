import { useEffect, useState } from 'react'
import { 
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
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

    const locationString = formData.location

    console.log(locationString)

    async function fetchPrediction(){
      const getResults = await getLocationByName(locationString)

      setPredictions(getResults?.features!)
    }

    fetchPrediction()

  },[formData.location])

  return (
    <Command className='bg-transparent w-full md:w-[65%]'>
     <div className=' bg-transparent' style={{ boxShadow: 'none', border: '1px solid #4c6f59', padding: '5px 0 5px 0', borderRadius: '7px' }} >
      <CommandInput className='command-input text-[#4c6f59]' value={formData.location} onValueChange={(newValue) => setFormData((prev) => ({ ...prev, location: newValue }))}/>
     </div>
      <CommandList className='bg-transparent' style={{ border: '1px solid #4c6f59', borderTop: 0, borderRadius: '7px' }}>
        <CommandGroup heading='Suggestion'>
         {predictions.map((predict, index) => {
          console.log(predictions, predict)
          return (
            <CommandItem className='cursor-pointer' key={index} onClick={() => setFormData(prev => ({ ...prev, location: `${predict.properties.address_line1} ${predict.properties.address_line2 && `, ${predict.properties.address_line2}`}` }))}>
              {predict.properties.address_line1}
              {predict.properties.address_line2 && `, ${predict.properties.address_line2}`}
            </CommandItem>
          )
         })}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
