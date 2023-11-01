// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (fn: (...args: any[]) => void, delay: number) => {
    let timerID: number
    return function optFn() {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            fn()
        }, delay)
    }
}