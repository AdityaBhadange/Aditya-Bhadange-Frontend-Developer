import { useGetRocketsQuery, useGetCapsulesQuery } from '../redux/api';

export const useGetRockets = () => {
  const {
    data,
    isError: isErrorGetRockets,
    isFetching: isFetchingGetRockets,
    isLoading: isLoadingGetRockets,
    isSuccess: isSuccessGetRockets
  } = useGetRocketsQuery({});

  const getRocketsData = data || [];

  return {
    getRocketsData,
    isErrorGetRockets,
    isFetchingGetRockets,
    isLoadingGetRockets,
    isSuccessGetRockets
  };
};

export const useGetCapsules = () => {
  const {
    data,
    isError: isErrorGetCapsules,
    isFetching: isFetchingGetCapsules,
    isLoading: isLoadingGetCapsules,
    isSuccess: isSuccessGetCapsules
  } = useGetCapsulesQuery({});

  const getCapsulesData = data || [];

  return {
    getCapsulesData,
    isErrorGetCapsules,
    isFetchingGetCapsules,
    isLoadingGetCapsules,
    isSuccessGetCapsules
  }
};
