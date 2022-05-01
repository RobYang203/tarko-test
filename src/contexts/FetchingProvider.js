import React, { useContext, useMemo, useState } from 'react';

const FetchingContext = React.createContext({
  fetchingTypes: {},
  addFetching: () => {},
  cancelFetching: () => {},
});

export const FetchingProvider = ({ children }) => {
  const [fetchingTypes, setFetchingTypes] = useState({});

  const addFetching = (fetchingTarget) => {
    setFetchingTypes((fetchingTypes) => {
      return {
        ...fetchingTypes,
        [fetchingTarget]: 'LOADING',
      };
    });
  };

  const cancelFetching = (fetchingTarget) => {
    delete fetchingTypes[fetchingTarget];

    setFetchingTypes(() => {
      return {
        ...fetchingTypes,
      };
    });
  };

  const value = useMemo(() => {
    return {
      fetchingTypes,
      addFetching,
      cancelFetching,
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchingTypes]);

  return (
    <FetchingContext.Provider value={value}>
      {children}
    </FetchingContext.Provider>
  );
};

export const useFetching = () => {
  const { fetchingTypes, addFetching, cancelFetching } =
    useContext(FetchingContext);

  return {
    fetchingTypes,
    addFetching,
    cancelFetching,
  };
};

export default FetchingProvider;
