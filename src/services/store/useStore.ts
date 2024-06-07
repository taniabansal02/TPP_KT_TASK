import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

interface Props<M> {
  KEY: string;
  initData: M;
}

const useStore = <M>({KEY, initData}: Props<M>) => {
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [storeData, setData] = useState<M>(initData);

  const getDataFromAsync = async () => {
    let asyncData;
    try {
      const dataString = await AsyncStorage.getItem(KEY);
      asyncData = dataString && (await JSON.parse(dataString));
      console.log(KEY + ' Data fetched from async', asyncData);
      if (asyncData) {
        setData(asyncData);
      }
      setDataRetrieved(true);
    } catch (error) {
      console.error(error);
    }
    return asyncData;
  };

  const setDataToStore = async (newData: M) => {
    try {
      console.log('Data ', storeData, ' new data ', newData);
      const updatedData = {...storeData, ...newData};
      setData(updatedData);
      const dataString = JSON.stringify(updatedData);
      await AsyncStorage.setItem(KEY, dataString);
      console.log('Data updated', updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const setAbsoluteDataToStore = async (newData: M) => {
    try {
      const updatedData = newData;
      setData(updatedData);
      const dataString = JSON.stringify(updatedData);
      await AsyncStorage.setItem(KEY, dataString);
      console.log('Data updated12', dataString);
    } catch (error) {
      console.error(error);
    }
  };

  const removeData = async () => {
    await setAbsoluteDataToStore({});
  };

  useEffect(() => {
    getDataFromAsync();
  }, []);

  return {
    storeData,
    dataRetrieved,
    getDataFromAsync,
    setAbsoluteDataToStore,
    setDataToStore,
    removeData,
  };
};

export default useStore;
