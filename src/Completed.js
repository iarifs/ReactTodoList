import React from 'react'


/*Added font awesome library for our icons and
imported one icons called check*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
library.add(faCheck)

class Completed extends React.Component{
    render(){
        return (
            <div className = "allTodos">
                <ul>
                    <li>
                        <FontAwesomeIcon icon ="check" className ="highlight green"/> 
                         {this.props.value}</li>
                </ul>
            </div>
        )
    }
}

export default Completed;