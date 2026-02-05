export default function handleKeyDown(e, contRef) {

    const container = contRef.current
    const activeEl = document.activeElement

    if (!container || !container.contains(activeEl)) return
    if (!activeEl.dataset.index) return

    const index = Number(activeEl.dataset.index)
    const inputs = container.querySelectorAll("input")



    if (e.key === "Backspace") {
        if (activeEl.value === "" && index > 0) {
            inputs[index - 1].focus()
        }
    }

    if (/^\d$/.test(e.key)) {
        activeEl.value = e.key
        if (index < inputs.length - 1) {
            inputs[index + 1].focus()
        }
        e.preventDefault()
    }
}
