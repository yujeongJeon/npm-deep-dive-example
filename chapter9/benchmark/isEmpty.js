function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER;
}

function isArrayLike(value) {
    return value != null && typeof value !== "function" && isLength(value.length);
}

export default function isEmpty(value) {
    if (value == null) {
        return true;
    }

    if (isArrayLike(value)) {
        return !value.length;
    }

    const type = Object.prototype.toString.call(value);

    if (type === "[object Map]" || type === "[object Set]") {
        return !value.size;
    }

    if (type === "[object Object]") {
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                return false;
            }
        }
        return true;
    }

    return false;
}
