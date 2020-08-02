import React from 'react'

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    state={
        title: ''
    }

onSubmit = (e)=>{
e.preventDefault();
this.props.addTodo(this.state.title);

if(e == "")
{
    alert("poo")
}
else{
    this.setState({ title: '' })
}
}

    onChange = (e)=>this.setState({[e.target.name]: e.target.value});
//Makes it target the name propery to get the value
    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
<input 
type="text" 
name="title" 
style={{flex: '10', padding: '5px'}}
placeholder="Add Todo..."
value={this.state.title}
onChange={this.onChange}/>
<input 
type="submit" 
value="Submit" 
className="btn" 
style = {{flex:'1'}}
 />
           </form>
        )
    }
}

