let check1

setInterval(() => {
    chrome.storage.sync.get(null, function (data) {
        console.log(data)
        check1 = data.check1
        if (check1 !== undefined) {
            check1++
            chrome.storage.sync.set({ check1: check1 })
        }
        if (check1 >= 10) {
            chrome.storage.sync.clear()
        }
    })
}, 1000)
