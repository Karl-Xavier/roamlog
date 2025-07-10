import React, { useEffect } from 'react'

type HeadProps = {
  title?: string;
  image?: string;
  description?: string;
  keywords?: string[];
}

const Head: React.FC<HeadProps> = ({ title, description, image, keywords }) => {

  useEffect(() => {
    if(title) {
      document.title = title
    }

    const setMetaTag = (selector: string, attr: string, value: string) => {
      let tag = document.querySelector(selector)

      if(tag){
        tag.setAttribute(attr, value)
      }else {
        const newTag = document.createElement('meta')

        if(selector.startsWith('meta[name=')){
          newTag.setAttribute('name', selector.split('"')[1])
        }else if(selector.startsWith('meta[property=')){
          newTag.setAttribute('property', selector.split('"')[1])
        }

        newTag.setAttribute(attr, value)

        document.head.appendChild(newTag)
      }
    }

    if(description){
      setMetaTag('meta[name="description"]', 'content', description)
    }

    if(keywords && keywords.length > 0){

      const keywordString = keywords.join(', ')

      setMetaTag('meta[name="keywords"]', 'content', keywordString)
    }

    if(image){
      setMetaTag('meta[name="og:image"]', 'content', image)
    }


  }, [title, description, image, keywords])

  return null

}


export default Head