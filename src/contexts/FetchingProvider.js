import React, { useContext, useMemo, useState } from 'react';

const FetchingContext = React.createContext({
  fetchingTypes: new Map(),
  addFetching: () => {},
  cancelFetching: () => {},
});

export const FetchingProvider = ({ children }) => {
  const [fetchingTypes, setFetchingTypes] = useState(new Map());

  const addFetching = (fetchingTarget) => {
    fetchingTypes.set(fetchingTarget, 'LOADING');

    setFetchingTypes(fetchingTypes);
  };

  const cancelFetching = (fetchingTarget) => {
    fetchingTypes.delete(fetchingTarget);
    setFetchingTypes(fetchingTypes);
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
