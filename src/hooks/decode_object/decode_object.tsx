export function decodeObject(obj:object):object|string {
    if (typeof obj === 'string') {
      try {
        return decodeURIComponent(obj);
      } catch (e) {
        return obj;
      }
    } else if (Array.isArray(obj)) {
      return obj.map(decodeObject);
    } else if (typeof obj === 'object' && obj !== null) {
      const decodedObj: { [key: string]: any } = {};
      for (const key in obj) {
        //@ts-ignore
        decodedObj[key] = decodeObject(obj[key]);
      }
      return decodedObj;
    }
    return obj;
  }