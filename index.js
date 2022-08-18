;(function () {
  window.addEventListener('load', () => {
    const script = document.getElementById('affiliate-script')
    const iframe = document.createElement('iframe')
    iframe.setAttribute('src', script.getAttribute('data-iframe-origin'))
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
    iframe.addEventListener('load', () => {
      const win = iframe.contentWindow
      win.postMessage(
        {
          context: 'adori-affiliate',
          event: 'set-storage',
          data: { affiliate: script.getAttribute('data-affiliate-slug') },
        },
        '*'
      )
    })
  })
})()
