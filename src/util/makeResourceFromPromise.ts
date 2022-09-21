type Resource<ResolveType> = () => ResolveType;

const makeResourceFromPromise = <ResolveType>(promise: Promise<ResolveType>): Resource<ResolveType> => {
  let value: ResolveType;
  let error: any;
  let resolved: boolean;
  let rejected: boolean;

  promise
    .then((_value) => {
      resolved = true;
      value = _value;
    })
    .catch((_error) => {
      rejected = true;
      error = _error;
    });

  return () => {
    if (rejected) throw error;
    if (resolved) return value;
    throw promise;
  };
};

export default makeResourceFromPromise;
