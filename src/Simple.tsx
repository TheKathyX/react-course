import React from "react";

export default function Simple() {
    return (
        React.createElement("div", {
            myattribute: "myvalue"
        }, React.createElement("h1", null, "Hello World 2"),
            React.createElement("h2", null, "This is a subtext"))
    )
}


// export default function Simple(){
//     return (
//         <div>
//             <h1>Hello world</h1>
//             <h2>This is a subtext</h2>
//             <h3>A message for Simple function</h3>
//         </div>
//     )
// }


