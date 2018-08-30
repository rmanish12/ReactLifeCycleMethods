import React from 'react'

class SecondChild extends React.Component{

    constructor(props){
        super(props)
        console.log('SecondChild: constructor')

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    componentWillMount(){
        console.log('SecondChild: componentWillMount')
    }

    componentDidMount(){
        console.log('SecondChild: componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('Second Child: componentWillReceiveProps')
    }

    onChangeHandler(event){
        event.preventDefault()
        console.log('SecondChild: Button Clicked')
        this.props.history.push('/change')
    }

    componentWillUnmount(){
        console.log('SecondChild: componentWillUnmount')
    }

    render(){
        console.log('Second Child: render')
        return(
            <div>
                
            </div>
        )
    }
}

export default SecondChild