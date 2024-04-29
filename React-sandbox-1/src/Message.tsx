//Function based component

//Pascal Casing
function Message() {
    //JSX : Javascript XML
    const name = 'Phanx'
    if (name)
        return <h1>Hello {name}</h1>
    else 
        return <h1>Hello World</h1>
}
//export
export default Message;