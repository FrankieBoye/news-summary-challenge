// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://content.guardianapis.com/search?api-key=468a8f5f-8ab1-4e14-860d-404ef49c71ab', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.response.results.forEach(article => {
  // Log each section's title
  console.log(article.webTitle)
  })
} else {
  console.log('error')
  }

}

request.send()
