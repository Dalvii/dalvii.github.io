let dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
function toggleMode() {
    if (dark == 1) {
        document.body.style.backgroundColor = '#33230e';
        document.body.style.color = '#dad6cf'
        dark = 0;
        document.getElementById('toggleMode').classList.add('moonMode')
        document.getElementById('toggleMode').classList.remove('lightMode')
    } else {
        document.body.style.backgroundColor = 'rgb(15, 17, 18)';
        document.body.style.color = '#f2f0ed';
        dark = 1;
        document.getElementById('toggleMode').classList.remove('moonMode')
        document.getElementById('toggleMode').classList.add('lightMode')

    }
}
if (dark == 1) {
    document.getElementById('toggleMode').classList.add('lightMode')
} else {
    document.getElementById('toggleMode').classList.add('moonMode')
}
document.getElementById('toggleMode').onclick = function() {
    toggleMode()
}