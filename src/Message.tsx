function Message() {
    // JSX: JavaScript XML
    const name = 'vivian';
    if (name)
        return <h1>hello {name}</h1>;
    return <h1>hello world</h1>;
}

export default Message;