import './style.css'
import '@riotjs/hot-reload'

import { component, register } from 'riot'

// Link towards all the components, for registration
import HashContainer from "./components/hash-container.riot"
import HashElement from "./components/hash-element.riot"
import HashRow from "./components/hash-row.riot"

register('hash-element', HashElement);
register('hash-row', HashRow);

component(HashContainer)(document.getElementById('approot'));