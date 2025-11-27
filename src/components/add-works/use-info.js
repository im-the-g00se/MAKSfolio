import { useState } from "react";

export function useInfo() {
    const placeholder = new URL("./img/placeholder.png", import.meta.url).href;

    const [info, setInfo] = useState({
        title: "",
        text: "",
        iconImg: placeholder,
        desktopImg: placeholder,
        mobileImg: placeholder,
        skills: [""],
    });

    return [info, setInfo]

}

export function useTextLayoutInfo(info, setInfo) {
    function setSkill(index, value) {
            setInfo((prevInfo) => {
                let newArray = prevInfo.skills
                    .map((e, i) => {
                        if (i === index) {
                            return value;
                        } else {
                            return e;
                        }
                    })
                    .filter((n) => n);
                newArray.push("");
                return {
                    ...prevInfo,
                    skills: newArray,
                };
            });
        }
    
        function setTitle(newTitle) {
            setInfo((prevInfo) => {
                return {
                    ...prevInfo,
                    title: newTitle,
                };
            });
        }
        function setText(newText) {
            setInfo((prevInfo) => {
                return {
                    ...prevInfo,
                    text: newText,
                };
            });
        }
    
        function setIcon(newIcon) {
            setInfo((prevInfo) => {
                return {
                    ...prevInfo,
                    iconImg: newIcon,
                };
            });
        }

        return [setSkill, setTitle, setText, setIcon];
}