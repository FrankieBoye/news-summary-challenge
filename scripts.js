const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianREV.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?api-key=468a8f5f-8ab1-4e14-860d-404ef49c71ab', true)

request.onload = function () {

  var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.response.results.forEach(article => {

  console.log(article.webTitle)
  })
} else {
  console.log('error')
  }

}

request.send()
