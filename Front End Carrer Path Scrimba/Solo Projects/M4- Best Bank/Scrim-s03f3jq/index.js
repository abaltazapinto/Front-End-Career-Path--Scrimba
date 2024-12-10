const toggle = document.getElementById('darkmode-toggle')
toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', toggle.checked)
})