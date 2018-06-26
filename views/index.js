import header from './components/header/header.js'
import uploadForm from './components/uploadForm/uploadForm.js'
import setUpMap from './components/map/map.js'
import toggleToolButton from './components/storyAddItemButton/storyAddItemButton.js'
import autocompleteFromApiInit from './components/lib/autocomplete.js'
import colorThief from './components/storyHighlight/storyHighlight.js'
import initReportComponent from './components/reportComponent/reportComponent.js'
import removeStoryInit from './components/adminStory/adminStory.js'
import { selectComponents } from './components/enhancedDetail/enhancedDetail.js'
import {optimizedResize, animateOnIntersect} from './components/lib/helpers.js'


( function IIFE () {

	if( !( document.documentElement.classList && document.querySelectorAll ) ) return
	animateOnIntersect()
	setUpMap()
	selectComponents()
	header()
	uploadForm()
	toggleToolButton()
	optimizedResize()
	autocompleteFromApiInit()
	colorThief()
	initReportComponent()
	removeStoryInit()
} )()