export const jsonParseFormData = (data, keysToParse) => {
  if (data && Array.isArray(keysToParse)) {
    for (let key of keysToParse) {
      const value = data[key];
      if (typeof value === "string") {
        data[key] = JSON.parse(data[key]);
      }
    }
  }
  return data;
};

export const jsonStringifyFormData = (data, keysToParse) => {
  if (data && Array.isArray(keysToParse)) {
    for (let key of keysToParse) {
      const value = data[key];
      if (typeof value === "object") {
        data[key] = JSON.stringify(data[key]);
      }
    }
  }
  return data;
};

export const jsonParseObjectsArray = (data, keysToParse = []) => {
  if (Array.isArray(data)) {
    data.map((data) => jsonParseFormData(data, keysToParse));
  }
  return data;
};

export const jsonStringifyObjectsArray = (data, keysToParse) => {
  if (Array.isArray(data)) {
    data.map((data) => jsonStringifyFormData(data));
  }
  return data;
};
