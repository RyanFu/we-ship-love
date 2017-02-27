/**
 * Formatting function of shipping options to get countries array
 * @param  {Array} options  The shipping options array initially formatted
 * @return {Array}          The countries array formatted
 */
export const getOptionsCountries = options => (
  options.map(o => o.countries).reduce((a, b) => a.concat(b), [])
);

/**
 * Helper to dispatch a succedeed fetch
 * @param  {Function} dispatch  The store dispatch function
 * @param  {String} type        The action type
 * @param  {Object} data        The data object
 * @return {Promise}
 */
export const fetchSuccess = (dispatch, type, data) => {
  dispatch({
    type,
    data,
  });

  return Promise.resolve(data);
};

/**
 * Helper to dispatch a failed fetch
 * @param  {Function} dispatch  The store dispatch function
 * @param  {String} type        The action type
 * @param  {Error} error        The error object
 * @return {Promise}
 */
export const fetchFail = (dispatch, type, error) => {
  dispatch({
    type,
    error,
  });

  // Warning
  console.warn(error); // eslint-disable-line no-console

  return Promise.reject(error.message);
};
