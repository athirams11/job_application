/**
 * Check Valid Email
 * @param email
 * @returns {boolean}
 */
function isValidEmail(email) {
  /* eslint-disable-next-line */
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !reg.test(email);
}

/**
 * Check empty String
 * @param string
 * @returns {boolean}
 */
function isEmpty(checkString) {
  try {
    return (
      checkString === "" || checkString === null || checkString.length === 0
    );
  } catch (e) {
    return true;
  }
}

/**
 * Check empty String
 * @param string
 * @returns {boolean}
 */
function isNotEmpty(checkString) {
  return !isEmpty(checkString);
}

function isValidPhoneNumber(number) {
  var reg = /^\d{10}$/;
  return !reg.test(number);
}

export { isValidEmail, isEmpty, isNotEmpty, isValidPhoneNumber };
