import { useEffect, useState } from 'react'
import { IToDo } from '../Store/State/Types/ToDoTypes'

const useFetch = (url: string): [IToDo[]] | [null] => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [url])

  return [data]
}

export default useFetch
