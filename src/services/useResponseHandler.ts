// import {useNetInfo} from '@react-native-community/netinfo';
import crashlytics from '@react-native-firebase/crashlytics';
import {useNavigation} from '@react-navigation/core';
import {useContext} from 'react';
import {QueryKey} from 'react-query';
// import translations from '../assets/translations';
// import {
//   internetState,
//   toast,
//   toastType,
// } from '../components/common/commonalert';
import { toast, toastType } from '../components/common/commonalert';
// import {SCREEN} from '../root/screenname';
import { ApiStatusType } from './constants';
import {Base} from "../services/models/base"
import { useClaimAlertModalVisible, useSetLoader } from './store/useAppStore';
import { UserContext } from './store/userStore';

const useResponseHandler = <T>(
  key: QueryKey,
  offSuccessToast?: boolean,
  offErrorToast?: boolean,
  disableLoader?: boolean,
  body?: object | null,
) => {
  const setLoader = useSetLoader();
  const navigator = useNavigation();
  // const netInfo = useNetInfo();
  const {removeData} = useContext(UserContext);
  const {storeData} = useContext(UserContext);
  const setClaimAlertModalVisible = useClaimAlertModalVisible();
  const onSuccess = (data: Base<T>) => {
    console.log(
      '----------------------------------- TPP Request -----------------------------------',
    );
    console.log(
      key +
        ' response: ' +
        JSON.stringify(body) +
        '    ' +
        JSON.stringify(data),
    );
    console.log(
      '----------------------------------- TPP Request end -----------------------------------',
    );

    if (
      !data.success &&
      data.status_code === ApiStatusType.AuthenticationFail &&
      storeData?.data?.user != null
    ) {
      toast(
        data.message,
        data?.success ? toastType?.SUCESS_TOAST : toastType?.ERROR_TOAST,
      );

      setTimeout(() => {
        removeData();
        if (
          navigator.getState()?.routes !== undefined &&
          navigator.getState()?.routes.length > 0 &&
          navigator.getState()?.routes[0].name !== SCREEN.WELCOME
        ) {
          navigator.reset({
            index: 0,
            routes: [{name: SCREEN.WELCOME}],
          });
        }
      }, 300);
    } else if (
      !data.success &&
      data.status_code === ApiStatusType.ClaimApproved
    ) {
      setClaimAlertModalVisible(true);
    } else {
      try {
        if (
          (!offSuccessToast &&
            data?.message?.length > 0 &&
            data.status_code !== ApiStatusType.ClaimApproved) ||
          (!data.success &&
            !offErrorToast &&
            data?.message?.length > 0 &&
            data.status_code !== ApiStatusType.ClaimApproved)
        ) {
          toast(
            data?.message,
            data?.success ? toastType?.SUCESS_TOAST : toastType?.ERROR_TOAST,
          );
        }
      } catch (_e) {
        if (typeof _e === 'string') {
          console.error(key, _e.toUpperCase());
        } else if (_e instanceof Error) {
          console.error(key, _e.message);
        }
        if (!netInfo.isConnected && !netInfo.isInternetReachable) {
          internetState(false);
          return false;
        } else {
          toast(
            translations.OOPS_SOMETHING_WENT_WRONG_TRY_LETER,
            toastType.ERROR_TOAST,
          );
        }
      } finally {
        if (disableLoader !== undefined && !disableLoader) {
          setTimeout(() => {
            setLoader(false);
          }, 500);
        }
      }
    }
  };
  const onError = (error: any) => {
    console.log(
      '----------------------------------- TPP Request -----------------------------------',
    );
    console.log(key + '  bodyOfRequest ' + JSON.stringify(body));
    console.log(
      error + '  useResponseHandlerError ' + JSON.stringify(error) + ' ' + key,
    );
    console.log(
      '----------------------------------- TPP Request end -----------------------------------',
    );
    crashlytics().setAttribute('TPP API Error' + key, JSON.stringify(error));
    try {
      console.error(key, error);
      if (!netInfo.isConnected && !netInfo.isInternetReachable) {
        internetState(false);
        return false;
      } else {
        toast(
          translations.OOPS_SOMETHING_WENT_WRONG_TRY_LETER,
          toastType.ERROR_TOAST,
        );
      }
    } catch (_e) {
      if (typeof _e === 'string') {
        console.error(key, _e.toUpperCase());
      } else if (_e instanceof Error) {
        console.error(key, _e.message);
      }
      if (!netInfo.isConnected && !netInfo.isInternetReachable) {
        internetState(false);
        return false;
      } else {
        toast(
          translations.OOPS_SOMETHING_WENT_WRONG_TRY_LETER,
          toastType.ERROR_TOAST,
        );
      }
    } finally {
      setLoader(false);
    }
  };

  return {onSuccess, onError};
};

export default useResponseHandler;
