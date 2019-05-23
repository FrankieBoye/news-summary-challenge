const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianREV.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?api-key=468a8f5f-8ab1-4e14-860d-404ef49c71ab&show-fields=thumbnail', true)

request.onload = function() {

  var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.response.results.forEach(article => {

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h1 = document.createElement('h1')
    h1.textContent = article.sectionName

    const h2 = document.createElement('h2')
    h2.textContent = article.webTitle

    const img = document.createElement('img')
      img.src = article.fields.thumbnail

    const a = document.createElement('a')

    a.href = article.webUrl
    a.innerHTML = "Click"

    container.appendChild(card)

    card.appendChild(h1)
    card.appendChild(h2)
    card.appendChild(img)
    card.appendChild(a)

  })
} else {
  const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Sorry, cannot load...'
    app.appendChild(errorMessage)
  }

}

request.send()
