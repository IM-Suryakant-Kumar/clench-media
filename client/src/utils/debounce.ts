export const debounce = (fn: () => void, delay: number) => {
    let timerID: number
    return function optFn() {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            fn()
        }, delay)
    }
}