/*
NAME: DataLoader
DESCRIPTION:
*/

import { useEffect, useState, useContext, useCallback } from 'react';
import { Context } from '../context/store';

export default function DataLoader() {
  const [store, dispatch] = useContext(Context);
  const [dataLoaded, setDataLoaded] = useState<string>('');

  const useLoadDataCallback = () => {
    const loadDataCallback = useCallback(async () => {
      if (store.data[0]?.id === -1 || store.dataRefresh) {
        dispatch({ type: 'TOGGLE_LOADING', payload: true });
        console.log('loading session data into global context...');

        try {
          // Retrieve the JSON string from session storage
          const storedData = sessionStorage.getItem('saveData');

          // Convert the JSON string back to a JavaScript object
          const data: Record<string, any> | null = storedData ? JSON.parse(storedData) : null;

          dispatch({ type: 'LOAD_DATA', payload: data });
          if (store.dataRefresh) dispatch({ type: 'TRIGGER_DATA_REFRESH', payload: false });
          dispatch({ type: 'TOGGLE_LOADING', payload: false });
          setDataLoaded('success');
        } catch (err: any) {
          console.log(err.message, err.code);
          setDataLoaded('error');
        }
      }
    }, []);

    return loadDataCallback;
  };

  const loadData = useLoadDataCallback();

  useEffect(() => {
    if (!dataLoaded || store.dataRefresh) {
      loadData();
    }
  }, [dataLoaded, store.dataRefresh, loadData]);

  return (
    <></>
  )
}
