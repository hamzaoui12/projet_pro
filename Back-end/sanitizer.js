const extract = (keys) => {
  const subExtract = (obj) =>
    Array.isArray(obj)
      ? obj.map(subExtract)
      : keys.reduce((sanitized, key) => ({ ...sanitized, [key]: obj[key] }), {})

  return subExtract
}

const sanitizeUser = extract([
  "id",
  "firstName",
  "lastName",
  "mail",
  "phoneNumber",
  "orders"
])

module.exports = sanitizeUser