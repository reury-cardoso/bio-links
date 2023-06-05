function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    const img = document.querySelector('#perfil img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de perfil do projeto no modo light')

    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de perfil do projeto')
    }

}