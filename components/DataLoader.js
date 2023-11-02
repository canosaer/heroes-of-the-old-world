/*
NAME: DataLoader
DESCRIPTION: This shared component is embedded on pages that need to access data from the backend.
DEPENDENCIES:
- Axios is used to communicate with the backend
*/

import {useEffect, useState, useContext, useCallback} from 'react'
import { Context } from '../context/store'

export default function DataLoader() {

  const [ store, dispatch ] = useContext(Context)
  const [ dataLoaded, setDataLoaded ] = useState('')

  /*
  NAME: loadData
  DESCRIPTION: This callback function loads data from the backend into global context.
  */

  const useLoadDataCallback = () => {
    const loadDataCallback = useCallback(async () => {
      if(store.data[0].id === -1 || store.dataRefresh){
        dispatch ({type: 'TOGGLE_LOADING', payload: true})
        console.log('loading session data into global context...')
        try {
          // let response = await axios.get(`${apiBaseUrl}?${auth}`)
          // let data = response.data.results
          // console.log(response.data.results)
          // dispatch ({type: 'LOAD_DATA', payload: data})
          // if(store.dataRefresh) dispatch ({type: 'TRIGGER_DATA_REFRESH', payload: false})
          // dispatch ({type: 'TOGGLE_LOADING', payload: false})
          setDataLoaded('success')
        } catch (err) {
          console.log(err.message, err.code)
          setDataLoaded('error')
        }
      }
    }, [])

    return loadDataCallback;
  }

  const loadData = useLoadDataCallback()

  /*
  DESCRIPTION: This useEffect function detects if profiles haven't yet been loaded, or if the application state is calling
  for a data refresh. If either of those things is true, then the loadData function is invoked.
  */
  useEffect(() => {
    if(!dataLoaded || store.dataRefresh){
      loadData()
    }
  }, [dataLoaded, store.dataRefresh, loadData])
}