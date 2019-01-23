import React ,{Component}from 'react';
import PropTypes from 'prop-types';

/*Added font awesome library for our icons and
imported two icons called check-circle and Times-circle*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faCheckCircle,faTimesCircle)

class Todo extends Component{

render(){
    return(
            <div className = "allTodos">

                <ul >
                    <li>

                            {this.props.value}

                            <div className = "iconWrapper">

                            <section  onClick = {this.props.complete} style ={{display:'inline'}}>
                            <FontAwesomeIcon  icon ="check-circle" className="highlight green"/>
                            </section>


                            <section  style ={{display:'inline'}} onClick = {this.props.remove}>
                            <FontAwesomeIcon icon ="times-circle" className="highlight red"/>
                            </section>
                            
                            </div>
                    </li>

                </ul>

            </div>
    )
}

}

Todo.propTypes ={
   value:PropTypes.string,
}

export default Todo;