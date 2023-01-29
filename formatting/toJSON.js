const toString = (object) => JSON.stringify(object, null, 2).replaceAll(/[,'"]/g, '');
export default toString;
