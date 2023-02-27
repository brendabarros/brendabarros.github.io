const respositories = document.querySelector('.content-main');

//Comunicação com a api do GitHub
function getApiGitHub() {
    fetch('https://api.github.com/users/brendabarros/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            console.log(data)

            data.map(item => {
                let project = document.createElement('div');
                project.innerHTML = `
                <div class="project">
                    <div class="nome-projeto">
                      <h4 class="title">${item.name}</h4>
                     <span class="date-create">${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                     <p>${item.description}</p>
                    </div>
                    <div class="link-img">
                       <a href="${item.html_url} "target="_blank"><img src="img/github.png" alt=""></a>  
                       <span class="language"><span class="circle"></span>${item.language}</span>
                       
                    </div>
                    
                    `

                respositories.appendChild(project);

            }
            )

        })

}
getApiGitHub()