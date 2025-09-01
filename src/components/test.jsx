import { useState } from "react";

export function Test() {
    const [arr, setArr] = useState([''])
    return (
        <div>
            <Layout skills={arr}/>
        </div>
    );
}

function Layout({skills}) {
    function func() {
        console.log(skills.map((e) => {
            return e;
        }))
    }
    return (
        <button onClick={func} className="bg-black px-6 py-4 text-white rounded-3xl">Halanm</button>
    )
}