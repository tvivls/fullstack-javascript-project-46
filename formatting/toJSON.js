const toString = (object) => {
    return JSON.stringify(object, null, 2).replaceAll(/[,'"]/g, '')
}
export default toString;