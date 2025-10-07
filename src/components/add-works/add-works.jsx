import clsx from "clsx";
import SkillItem from "../ui/skill-item";
import Dropzone from "react-dropzone";
import { useInfo, useTextLayoutInfo } from "./use-info";

export function AddWorks() {
    const [info, setInfo] = useInfo();

    return (
        <div className="w-4/5 mx-auto min-h-[calc(100vh-20rem)]">
            <div className="text-2xl font-semibold">
                привет
                <br />
                тут ты можешь добавить проект в свое портфолио
                <br />
                стоит напомнить, что без доступа к панели управления сервером у
                тебя все равно ничего не получится, этот сайт - просто удобный
                конструктор
            </div>
            <div className="">
                <WorkElement info={info} setInfo={setInfo} />
                <div className="flex gap-10 pt-20">
                    <div className="flex-1 bg-gray-200 rounded-2xl"></div>
                    <div className="font-semibold text-2xl flex-1">
                        ИНСТРУКЦИЯ<br/><br/>для изменения текста нажми на него и начни
                        писать <br/><br/>для изменения картинки перетащи новую картинку на
                        место старой или нажми на старую и выбери новую <br/><br/>если не
                        задать иконку, то ее не будет на конечном макете, но
                        изображения задавать обязательно <br/><br/>для добавления навыка
                        нажми на пустое окошко навыка и начни писать <br/><br/>для
                        удаления навыка нажми на него и удали текст
                    </div>
                </div>
            </div>
        </div>
    );
}

export function WorkElement({ info, setInfo, className }) {
    return (
        <div
            className={clsx(
                "min-h-[450px] bg-neutral-50 rounded-4xl flex justify-between gap-10 w-full",
                className
            )}
        >
            <TextLayout
                title={info.title}
                text={info.text}
                icon={info.iconImg}
                skills={info.skills}
                setInfo={setInfo}
            />
            <ImagesLayout
                setInfo={setInfo}
                desktopImg={info.desktopImg}
                mobileImg={info.mobileImg}
            />
        </div>
    );
}

function TextLayout({ title, text, icon, skills }) {
    const [setSkill, setTitle, setText, setIcon] = useTextLayoutInfo();

    return (
        <div className=" mt-11 ml-11 mb-11 flex flex-col justify-between">
            <div className="">
                <div className="flex font-bold text-5xl items-center">
                    {icon && (
                        <DropArea
                            image={icon}
                            altImage="icon"
                            className="aspect-square h-11 object-cover mr-3 rounded-sm"
                            setImage={setIcon}
                        />
                    )}
                    <input
                        className="uppercase w-90"
                        placeholder="Название"
                        maxLength={10}
                        value={title}
                        onInput={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mt-3 flex flex-wrap gap-x-[6px] gap-y-3 w-full">
                    {skills.map((skill, index) => (
                        <SkillItem size="sm" key={index}>
                            <input
                                className="bg-transparent p-0 m-0 field-sizing-content"
                                placeholder="..."
                                maxLength={15}
                                value={skill}
                                onInput={(e) => setSkill(index, e.target.value)}
                            />
                        </SkillItem>
                    ))}
                </div>
                <textarea
                    className="mt-9 text-neutral-500 w-80 resize-none"
                    maxLength={200}
                    rows={7}
                    placeholder="Описание проекта (не слишком подробное)"
                    value={text}
                    onInput={(e) => setText(e.target.value)}
                />
            </div>
            <button className="w-fit px-6 py-3 rounded-full bg-black text-white">
                подтвердить
            </button>
        </div>
    );
}

function ImagesLayout({ desktopImg, mobileImg, setInfo }) {
    function setDesktopImg(newImg) {
        setInfo((prevInfo) => {
            console.log(newImg);
            return {
                ...prevInfo,
                desktopImg: newImg,
            };
        });
    }
    function setMobileImg(newImg) {
        setInfo((prevInfo) => {
            return {
                ...prevInfo,
                mobileImg: newImg,
            };
        });
    }
    return (
        <div className="flex pl-5 items-end overflow-hidden shrink-0 z-10 ">
            {desktopImg && (
                <DropArea
                    className="-mr-8 w-[500px] h-[280px] rounded-xl -rotate-10 shadow-lg"
                    image={desktopImg}
                    altImage="desktopImg"
                    setImage={setDesktopImg}
                />
            )}
            {mobileImg && (
                <DropArea
                    className="-mb-8 mr-2 h-[450px] w-[200px] rounded-xl rotate-10 shadow-lg"
                    image={mobileImg}
                    altImage="mobileImg"
                    setImage={setMobileImg}
                />
            )}
        </div>
    );
}

function DropArea({ className, setImage, image, altImage }) {
    return (
        <div className={clsx(className, "overflow-hidden")}>
            <Dropzone
                onDrop={(files) => setImage(URL.createObjectURL(files[0]))}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="relative w-full h-full">
                        <input
                            {...getInputProps()}
                            className="w-full h-full absolute"
                        />
                        <img
                            src={image}
                            alt={altImage}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}
            </Dropzone>
        </div>
    );
}
