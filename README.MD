## Scheepvaart Museum
About our client

## Table of Contents
- [How to install](#how-to-install)
- [Design Challenge](#design-challenge)
- [Stakeholders](#stakeholders)
- [Research](#research)
    - [Competitor Analysis](#competitor-analysis)
    - [Device Lab](#device-lab)
- [Planning](#planning)
    - [Scrum](#scrum)
    - [Briefings](#briefings)
    - [Standups](#standups)
- [Tooling](#tooling)
- [Code](#code)
- [After word](#after-word)

## How to install
Clone the repo and save it on your local machine. In your terminal navigate to the main folder.
Once there run the following commands:
<pre>npm install yarn</pre>
This will download one of the main dependencies that made our project work even better
<pre>yarn install</pre>
Now all the other dependencies will be downloaded to your computer.
<pre>yarn build</pre>
Build the project, using our tooling to set the correct files.
<pre>yarn dev</pre>
Now you're ready to run the project, if everything went according to plan then the project should be running on **localhost:8000**

## Design Challenge
Scheepvaart Museum is going to host a new exhibit about one of the most prestige ships in the Dutch sailing history called "oranje". During the kickoff they want to launch a online platform where people with a connection with the ship can share their story with the rest of the world.

- [x] Online responsive platform where people can upload their stories.
- [x] Images, audio and video files included in the story.
- [x] Users need to be able to respond to different stories (creating dialog)

## Stakeholders
- Scheepvaart Museum
- People with connections to "de Oranje"
- People interessted in history
- Maritiemportal
- Competitors (other museums, even though they don't offer the same)

## Features
- Adding your own story (incl. images, video, audio)
- Reading stories
- Reply to stories
- Flag content
- Responsive content
- Optimized performance for all devices

## Research
During this project, I performed a competitor analysis and tested our platform on different devices.

### Competitor Analysis
One of the researches I did was an analysis of competitors. This was so we could get a feel for what was out there, what other parties provided and what we had to do differently to stand out.

The research showed that there were a couple of other platforms that offered the same kind of service we tried to create for the "scheepvaart museum". Although most were just basic story sharing sites.

> [link to research - Competitor](https://github.com/moniac/meesterproef-scheepvaartmuseum/blob/master/research/readme-research.md)

### Device Lab
Once our platform was hosted online I could use the device lab to perform a couple of tests to check if everything still worked when viewed on different devices. Our target audience could be everyone, so I was important that our service could be used on handhelds, desktops, and tablets.

The first session showed us that a lot of older devices don't support Javascript. The styling of a lot of elements changed when viewed in older browsers.

> [link to research - Device Lab](https://github.com/moniac/meesterproef-scheepvaartmuseum/pull/143/files)

## Planning
During the first briefing with Ernst we decided to tackle this project as a group. Since our group consisted of six people it was important that we had a good way to communicatie and keep track of all the to do's. 

### Scrum
Scrum was the best solution for us. We sat down and brainstormed about all the different aspects the project would need. Later we used the Trello service to better track everything.

![](/Users/jamie/Downloads/scrum.jpg)

### Briefings
As a group we figured that it would be in the best interest for the client, as well as for us to hold weekly briefings about our progress. This helped with our planning. Every thursday afternoon we would send a summary of our work in progress and every friday morning we sat down and discussed our next steps.
> Notes about these meetings can be found inside my proces document.

### Standups
As part of our "how are we going to make this work with so many people in group" thought. We decided that we'd do daily standups. At the beginning of each day we would leave the classroom and discuss what we did the day before, what we were going to do and if there was anything else going on.

## Tooling
Mo's tooling was a bit confusing for me at first. I was still struggling to get the hang of javascript and the team was a couple of steps ahead.
So the first two weeks I really needed time to figure everything out, but once I got the hang of it everything went smooth.

A small example of the different code conventions that we've used in our project is the linter for Javascript and CSS.
It was really strict so whenever I wrote a bit of code my terminal would display all the code errors (mostly just about styling)

<pre>console.log("Hello World")</pre> 
**vs** 
<pre>console.log ( "Hello World" ) </pre>


### Github
Even though I've worked with Git and Github before, it was never in the set-up that we've used for this project. Since we were a group of six people
it was really important that we didn't overwrite each other's codes. To make sure everything went well we decided that every pull request had to be reviewed by an other team member just to make sure that we didn't get conflicting code.

<pre>git pull</pre>
Very important, if you don't do this often enough you'll be behind with your code and stuff starts to break.

<pre>git add .</pre>
Once you've added something be sure to add it to the stage.

<pre>git commit -m "message"</pre>
Whenever you added some code, or fixed an issue it's important to commit your changes to the branch you're working on.
I've tried to keep my commit messages as simple and informative as possible.

<pre>git push</pre>
Push everything to the branch you're working on.

<pre>git checkout branch "name of branch"</pre>
Whenever you want to use a different branch

### Yarn
Commands used for the project
<pre>yarn install</pre>
Install all the packages included in our project
<pre>yarn build</pre>
Build with the latest commits form everyone
<pre>yarn dev</pre>
Start the development envoirement
<pre>yarn component flag-component</pre>
With mo's awesome toolkit we could enter this command and all the files neccesary would be created within the correct folder with the correct names.

### SCSS
SASS or SCSS was something new to me. I had heard about it before, but never used it.
Since this was a requirement for the development of the project I started learning how to implement is.

Instead of writing CSS like this:
```css 
.report--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.report--container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.report--container form input[type=checkbox] {
  display: none;
}
.report--container form input[type=checkbox] + label {
  border: solid 1px crimson;
  transition: all 100ms;
  display: block;
  width: 10rem;
  margin: 0.5rem;
  text-align: center;
  padding: 0.2rem;
}
.report--container form input[type=checkbox]:checked + label {
  border: solid 1px crimson;
  background-color: crimson;
  color: white;
}
.report--container form input[type=checkbox]:hover + label {
  background-color: crimson;
  color: white;
}
.report--container form button {
  border: none;
  background-color: crimson;
  width: 5rem;
  color: white;
  height: 2rem;
  transition: all 150ms ease-in-out;
}
.report--container form button:hover {
  background-color: #a40f2d;
}

.report--container--checkboxes {
  display: flex;
}

.no-js .report--submit--btn {
  display: block;
}

.hidden {
  display: none;
}
```

I could write SCSS like this:
```css
$prime-color: #dc143c;
$second-color: #a40f2d;

* {
	font-family: 'Open Sans', sans-serif;
	margin: 0;
	padding: 0;
}

.report-component {
	display: flex;
	flex-direction: column;
	align-items: center;
	
	form {
		dislay: flex;
		flex-direction: column;
		align-items: center

		input[type="checkbox"] {
			display: none;

			&+ label {
				border: solid 1px crimson;
				transition: all 100ms;
				display: block;
				width: 10rem;
				margin: 0.5rem;
				text-align: center;
				padding: 0.2rem;

				&:checked {
					&+ label {
						border: solid 1px crimson;
						background-color: crimson;
						color: white;
					}
				}

				&:hover {
					&+ label {
						background-color: crimson;
						color: white;
					}
				}
			}
			
			button {
				border: none;
				background-color: crimson;
				width: 5rem;
				color: white;
				height: 2rem;
				transition: all 150ms ease-in-out;

				&:hover {
					background-color:#a40f2d;
				}
			}
		}
	}
}

.report-checkboxes-container {
	display: flex;
}

.no-js #report-submit-btn {
  display: block;
}

.hidden {
/*  display: none;*/
}
```

## Code
For this project I've created a couple of components each with a different focus.

> [Report component](https://github.com/moniac/meesterproef-scheepvaartmuseum/pull/137/files)

> [Intersection Observer](https://github.com/moniac/meesterproef-scheepvaartmuseum/pull/57/files)

> [page-detail](https://github.com/moniac/meesterproef-scheepvaartmuseum/compare/page-detail-jamie?expand=1)

### Report Component

- [x] CSS to the rescue
- [x] Webdesign

![](https://github.com/jajan20/meesterproef-scheepvaartmuseum/blob/master/src/images/report-component.png?raw=true)

One of the features that was very important to our client was the abillity to flag inapropriate and incorrect content.
This could mean that someone used language that ins't suited for the website or that something wasn't historical correct. 

I started out with some javascript. This was a simple set up. I wanted radio buttons to be clickable
without having to choose either. 

```js const incorrectBtn = document.querySelector('.incorrect-btn')
const inappropriateBtn = document.querySelector('.inappropriate-btn')
const incorrectTxt = document.querySelector('.incorrect-text')
const inappropriateTxt = document.querySelector('.inappropriate-text')

incorrectBtn.addEventListener("mouseenter", function( event ) {
    incorrectTxt.classList.remove('hidden')
    console.log('SHOOOOW MEEE')
})
  
incorrectBtn.addEventListener("mouseleave", function( event ) {
    incorrectTxt.classList.add('hidden')
    console.log('HIDEEEEEE MEEE')
})
  
inappropriateBtn.addEventListener("mouseenter", function( event ) {
	inappropriateTxt.classList.remove('hidden')
  console.log('SHOOOOW MEEE')
})
  
inappropriateBtn.addEventListener("mouseleave", function( event ) {
	inappropriateTxt.classList.add('hidden')
  console.log('HIDEEEEEE MEEE')
})
```

Later I realised that maybe checkboxes were a better solution and that my code could be better.
```js
const reportSubmitBtn = document.querySelector('.report-btn')
const incorrectCheckbox = document.querySelector('#incorrect-checkbox')
const inappropriateCheckbox = document.querySelector('#inappropriate-checkbox')

incorrectCheckbox.addEventListener('click', function() {
	const incorrectLabel = document.querySelector('#incorrect-label')
	if (incorrectLabel.classList.contains('active-report-btn')) {
		incorrectLabel.classList.remove('active-report-btn')
		console.log('non-active!')
	} else {
		console.log('active!')
		incorrectLabel.classList.add('active-report-btn')
	}
})

inappropriateCheckbox.addEventListener('click', function() {
	const inappropriateLabel = document.querySelector('#inappropriate-label')
	if (inappropriateLabel.classList.contains('active-report-btn')) {
		inappropriateLabel.classList.remove('active-report-btn')
		console.log('non-active!')
	} else {
		console.log('active!')
		inappropriateLabel.classList.add('active-report-btn')
	}
})

reportSubmitBtn.classList.add('hide')
```

And after I was really happy with the result I realised that almost everything I did with Javascript was something I could do with CSS alone. Just a small bit of Javascript to hide the submit button (when javascript worked, the button would directly send the post to the server.)

```js
const submitBtn = document.querySelector('.report--submit--btn')
submitBtn.classList.add('hidden')
```

Nothing fancy with Javascript just clean CSS

```css
* {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
}

.report--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.report--container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.report--container form input[type=checkbox] {
  display: none;
}
.report--container form input[type=checkbox] + label {
  border: solid 1px crimson;
  transition: all 100ms;
  display: block;
  width: 10rem;
  margin: 0.5rem;
  text-align: center;
  padding: 0.2rem;
}
.report--container form input[type=checkbox]:checked + label {
  border: solid 1px crimson;
  background-color: crimson;
  color: white;
}
.report--container form input[type=checkbox]:hover + label {
  background-color: crimson;
  color: white;
}
.report--container form button {
  border: none;
  background-color: crimson;
  width: 5rem;
  color: white;
  height: 2rem;
  transition: all 150ms ease-in-out;
}
.report--container form button:hover {
  background-color: #a40f2d;
}

.report--container--checkboxes {
  display: flex;
}

.no-js .report--submit--btn {
  display: block;
}

.hidden {
  display: none;
}
```

### Intersection Observer
- [x] Web app from scratch
- [x] Webdesign
- [x] Browsertech

![](https://github.com/jajan20/meesterproef-scheepvaartmuseum/blob/master/src/images/intersection-observer.png?raw=true)

This was a feature that we really wanted to implement. The challenge: How can we added content on scroll? The simple answer was scroll events. The hard answer, let's use an Intersection Observer.

**Attempt 1**
```js
    var statusBox = document.getElementById("statusBox");
    var statusText = document.getElementById("statusText");

    function handler(entries, observer) {
      for (entry of entries) {
        console.log(entry);

        statusText.textContent = entry.isIntersecting;

        if (entry.isIntersecting) {
          statusBox.className = "yes";
        } else {
          statusBox.className = "no";
        }
      }
    }

    /* By default, invokes the handler whenever:
       1. Any part of the target enters the viewport
       2. The last part of the target leaves the viewport */

    let observer = new IntersectionObserver(handler);
    observer.observe(document.getElementById("target"));
```

Didn't go so well, using a lot of var and no consistency.

**Attempt 2**

```js
if ('IntersectionObserver' in window) {
    const checker = document.querySelector('.checker')
    const articles = document.querySelector('.articles')
    
    // Append new articles to .articles
    function addArticles(number) {
        for (let i = 0; i < number; i++) {
            let newArticle = document.createElement('article')
            newArticle.classList.add('article', 'fade')
            articles.appendChild(newArticle)
          }
    }

    // Create new IntersectionObserver
    const io = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) {
            return
        }

        addArticles(1)
        articles.appendChild(checker)
    })

    io.observe(checker)
} else {
    console.log(`Your browser doesn't support this`)
}
```

Trying out a couple of things, still using vars.

**Fallback for Intersection Observer**
```js 
if ('IntersectionObserver' in window) {
	//do something
	} else {
		// do something else
}
```

**Final code**
```js
function enhancedDetailInit() {
	if ( ! ( document.querySelector( '.detail__content' ) && document.querySelector( '.detail__content--container' ) ) ) return
	if ( 'IntersectionObserver' in window ) {
		enhancedDetail()
	} else {
		fallbackDetail()
	}
}

function enhancedDetail() {
	const contentElements = Array.from( document.querySelector( '.detail__content--container' ).children )
	const config = {
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.25
	}

	const contentObserver = new IntersectionObserver( ( entries, self ) => {
		entries.forEach( entry => {
			if ( entry.isIntersecting ) {
				preloadContent( entry.target )
				self.unobserve( entry.target )
			}
		} )
	}, config )

	contentElements.forEach( content => {
		contentObserver.observe( content )
	} )

	function preloadContent( content ) {
		content.classList.add( 'visible' )
	}
}


function fallbackDetail() {
	const element = document.querySelectorAll( '.detail__content' )
	for ( const [ i ] of element.entries() ) {
		element[ i ].classList.add( 'visible' )
	}
}


export {
	selectComponents
}
```

No more vars in the code, using functions to implement modules. Tried experimenting with fancy new ES6 code and writtin according our code conventions.

### Natural Language Form
One of the components I've worked on but where my code came up short is the natural language form.
The idea was for users to input information step by step in a way that didn't feel slow and confusing.

![](https://github.com/jajan20/meesterproef-scheepvaartmuseum/blob/master/src/images/natural-language-form.png?raw=true)

Even though in the end my code wasn't used, the concept started to live. Servin and Mees made a beautifull input field.
I hope that one day my form is as fluid as theirs.

## After word
In conclusion I'd like to reflect on the five weeks working with a group of six classmates. At first I wasn't so sure if it was an good idea for me to work in a group. Because half of the class is farther in terms of code and I believed working in a group would make it that much harder.

At the end it was just as I inmagined, it was harder, more confusing, and at times it was really frustrating. But I've learned so much from my team. I learned how to work with really specialized tooling, I've learned how to work how to write SCSS. Whenever I've writtin some JavaScript I could ask for feedback and I would always learn something new, something better. I believe our team worked very well together, we communicated, we helped and we had fun. We did good.

## Contributers

| Contributer  | Github URL                       |
|--------------|:-------------------------------  |
| Mees         | https://github.com/meesrutten 	  |
| Mo           | https://github.com/moniac        |
| Niels        | https://github.com/NielsFS       |
| Robin        | https://github.com/RobinFrugte97 |
| Servin       | https://github.com/servinlp      |

## License
MIT
