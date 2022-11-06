const toString = Object.prototype.toString;

/**
 * @description: Determine if a value is of a certain type
 */
export function isType(val: unknown, type: string) {
    return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  Is it a function
 */
export function isFunction<T = Function>(val: unknown): val is T {
    return isType(val, "Function");
}

/**
 * @description: Is it defined
 */
export const isDef = <T = unknown>(val?: T): val is T => {
    return typeof val !== "undefined";
};

export const isUnDef = <T = unknown>(val?: T): val is T => {
    return !isDef(val);
};

/**
 * @description: Is it an object
 */
export const isObject = (val: any): val is Record<any, any> => {
    return val !== null && isType(val, "Object");
};

/**
 * @description: handle the value of the object
 */
export const mapObject = <K extends keyof any, T, U>(obj: Record<K, T>, fun: (val: T) => U): Record<K, U> => {
    let res = <Record<K, U>>{};
    Object.keys(obj).map(key => {
        res[key as keyof typeof obj] = fun(obj[key as keyof typeof obj]);
    });
    return res;
};
/**
 * @description:  Is it time
 */
export function isDate(val: unknown): val is Date {
    return isType(val, "Date");
}

/**
 * @description:  Is it a numeric value
 */
export function isNumber(val: unknown): val is number {
    return isType(val, "Number");
}

/**
 * @description:  Is it an Async Function
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
    return isType(val, "AsyncFunction");
}

/**
 * @description:  Is it a promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
    return isType(val, "Promise") && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
/**
 * @description:  Is it a string
 */
export function isString(val: unknown): val is string {
    return isType(val, "String");
}

/**
 * @description:  Is it a boolean type
 */
export function isBoolean(val: unknown): val is boolean {
    return isType(val, "Boolean");
}

/**
 * @description:  Is it an array
 */
export function isArray(val: any): val is Array<any> {
    return val && Array.isArray(val);
}

/**
 * @description: Whether the client
 */
export const isClient = () => {
    return typeof window !== "undefined";
};

/**
 * @description: Is it a browser
 */
export const isWindow = (val: any): val is Window => {
    return typeof window !== "undefined" && isType(val, "Window");
};

export const isElement = (val: unknown): val is Element => {
    return isObject(val) && !!val.tagName;
};

export const isServer = typeof window === "undefined";

// Whether it is an image node
export function isImageDom(o: Element) {
    return o && ["IMAGE", "IMG"].includes(o.tagName);
}

export function isNull(val: unknown): val is null {
    return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
    return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
    return isUnDef(val) || isNull(val);
}
