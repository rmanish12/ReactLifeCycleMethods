import React from 'react'
import SecondChild from './SecondChild'

class FirstChild extends React.Component{

    constructor(props){
        super(props)
        console.log('FirstChild: constructor')

        this.state = {
            text: 'abcd'
        }
    }

    componentWillMount(){
        console.log('FirstChild: componentWillMount')
    }

    componentDidMount(){
        console.log('FirstChild: componentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('First Child: componentWillReceiveProps')
        console.log(nextProps)
    }

    render(){
        console.log('FirstChild: render')
        return(
            <div>
                <p>FirstChild: {this.props.name}</p>
                <SecondChild text = {this.state.text}/>
            </div>
        )
    }
}

export default FirstChild