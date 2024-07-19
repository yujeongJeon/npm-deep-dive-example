export const pick = (obj, keyChain) => {
    const keys = keyChain.split('.')

    let result = obj
    for(let i = 0; i < keys.length; i++) {
        const key = keys[i]

        result = obj[key] ?? 'unknown'
    }
    
    return result
}