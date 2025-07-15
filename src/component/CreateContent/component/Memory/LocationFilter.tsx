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
  const [commandValue, setCommandValue] = useState<string>('')

  console.log(formData, predictions)

  useEffect(() => {

    console.log(commandValue)

    async function fetchPrediction(){
      const getResults = await getLocationByName(commandValue)

      setPredictions(getResults?.features!)
    }

    fetchPrediction()

  },[commandValue])

  function appendSearchValue(data: Feature){
    const locationData = `${data.properties.address_line1} ${data.properties.address_line2 && `${data.properties.address_line2}`}`

    setCommandValue(locationData)
    setFormData(prev => ({ ...prev, location: locationData }))

    const latitude = data.properties.lat
    const longitude = data.properties.lon

    setFormData(prev => ({ ...prev, lat: latitude }))
    setFormData(prev => ({ ...prev, lon: longitude }))
  }

  return (
    <Command className='bg-transparent w-full md:w-[65%]'>
     <div className=' bg-transparent' style={{ boxShadow: 'none', border: '1px solid #4c6f59', padding: '5px 0 5px 0', borderRadius: '7px' }} >
      <CommandInput className='command-input text-[#4c6f59]' value={commandValue} onValueChange={setCommandValue}/>
     </div>
      <CommandList className='bg-transparent' style={{ border: '1px solid #4c6f59', borderTop: 0, borderRadius: '7px' }}>
        {commandValue.length > 2 && (
          <CommandGroup heading='Locations'>
            {predictions.map(predict => (
              <CommandItem onSelect={() => appendSearchValue(predict)}>
                {predict.properties.address_line1}&nbsp;
                {predict.properties.address_line2 && `${predict.properties.address_line2}`}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  )
}
