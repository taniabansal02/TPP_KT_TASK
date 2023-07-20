import {useContext} from 'react';
import {useMutation} from 'react-query';
import {UserContext} from '../../store/userStore';
import {MethodTypes} from '../constants';
import {API_VERSION} from '../endpoints';
import useResponseHandler from '../useResponseHandler';

interface Props {
  key: string;
  url: string;
  method?: string;
  body?: object | null;
  auth?: string | null;
  customHeader?: any;
  isJson?: boolean;
  offSuccessToast?: boolean;
  disableLoader?: boolean;
  offErrorToast?: boolean;
}

const useCgMutation = <T>({
  key,
  url,
  method = MethodTypes.Post,
  body,
  isJson = true,
  customHeader,
  offSuccessToast = false,
  disableLoader = false,
  offErrorToast = false,
}: Props) => {
  const {onSuccess, onError} = useResponseHandler(
    key,
    offSuccessToast,
    offErrorToast,
    disableLoader,
    body,
  );
  const {storeData} = useContext(UserContext);

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + storeData.data?.access_token,
    ...customHeader,
  };

  return useMutation<T>(
    key,

    () =>
      fetch(Config.BASE_URL + API_VERSION + url, {
        body: body ? (isJson ? JSON.stringify(body) : body) : null,
        method,
        headers: headers,
      }).then(res => res.json()),
    {
      onSuccess,
      onError,
    },
  );
};

export default useCgMutation;
