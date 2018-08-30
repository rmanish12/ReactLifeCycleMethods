import React from 'react'
import FirstChild from './FirstChild'

class Main extends React.Component{

    constructor(){
        super()
        console.log('Main: constructor')

        this.state = {
            name: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(event){
        event.preventDefault()
        console.log('Button Clicked')
        this.setState({
            name: 'Test'
        })
    }

    componentWillMount(){
        console.log('Main: componentWillMount')
    }

    componentDidMount(){
        console.log('Main: componentDidMount')
    }

    componentWillUpdate(){
        console.log('Main: componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('Main: componentDidUpdate')
    }

    render(){
        console.log('Main: render')
        return(
            <div>
                <button onClick = {this.onChangeHandler}>Change State of Main Component</button>
                <FirstChild name = {this.state.name}/>
            </div>
        )
    }
}

export default Main