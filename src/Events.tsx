 export default function Events() {
    const canSee = false;

    function handleCheckBoxChanged(){
        // alert("my value was changed")
        canSee = !canSee
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>){
        console.log(e.currentTarget.value);
    }



    return (
        <>
        <h1>Conditionals Example</h1>

        <div>
        <input type="checkbox" onChange={handleCheckBoxChanged} />
        </div>
        <div>
            <button onClick={() => {
                alert('I have been clicked')
            }}>Click me</button>
        </div>
        <div>
            <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
        </div>
        // this parameter allows us to access information about the event



        {canSee ? <div>You are seeing the secret</div> 
        : <div>You are not allowed to see</div>}
    </>
    );
}

// Event refers to an action that is going to get executed
// Adding a checkbox
