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

    componentWillReceiveProps(){
        console.log('First Child: componentWillReceiveProps')
    }

    render(){
        console.log('FirstChild: render')
        return(
            <div>
                <SecondChild text = {this.state.text}/>
            </div>
        )
    }
}

export default FirstChild