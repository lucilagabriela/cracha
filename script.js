function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/lucilagabriela`

    fetch(url)
        .then(response => response.json()) /* transforma em json*/
        .then(data => { /* var data armazena response em json*/
            // idnomeCentral.textContent = data.name //trocar o nome
            userBio.textContent = data.bio
        })
}
getGitHubProfileInfos()

/*const linksSocialMedia = {
    github = 'lucilagabriela',
    instagram = 'lucilagcosta'
}

function changeSocialMedia() {
    for (let a of linksSocialMedia.children) {
        const social = a.getAttribute('class')
    
        a.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    alert(url)
}
getGitHubProfileInfos()*/