
import {
  POST_MESSAGE_TYPE_BACKGROUND_SETTINGS
} from './constants'
import {
  updateBackgroundSettings
} from './background'

// Handle messages from webpage.

var trustedOrigins = [
  'http://www.exploreos.com/',
  'https://www.exploreos.com/',
  // Used in development
  'http://localhost:3000'
]

// Called sometime after postMessage is called
function receiveMessage (event) {
  // Make sure we trust the sender.
  if (trustedOrigins.indexOf(event.origin) === -1) {
    console.error(`Received message from untrusted domain: ${event.origin}`)
    return
  }
  switch (event.data.type) {
    case POST_MESSAGE_TYPE_BACKGROUND_SETTINGS:
      updateBackgroundSettings(event.data.data)
      break
    default:
  }
}

// Listen for messages from the web app.
export const addListener = () => {
  try {
    window.addEventListener('message', receiveMessage, false)
  } catch (e) {
    console.error(e)
  }
}
