import React from 'react'
import FirstChild from './FirstChild'

class Main extends React.Component{

    constructor(){
        super()
        console.log('Main: constructor')

        this.state = {
            name: 'abc'
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
        // this.setState({
        //     name: 'abcd'
        // })
    }

    componentWillUpdate(nextProps, nextState){
        console.log('Main: componentWillUpdate')
        console.log(nextProps)
        console.log(nextState)
    }

    componentDidUpdate(){
        console.log('Main: componentDidUpdate')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Main: shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)

        // if(nextState.name === 'Test'){
        //     return false
        // }
        return true
    }

    render(){
        console.log('Main: render ' + this.state.name)
        return(
            <div>
                <button onClick = {this.onChangeHandler}>Change State of Main Component</button>
                <FirstChild name = {this.state.name}/>
            </div>
        )
    }
}

export default Main