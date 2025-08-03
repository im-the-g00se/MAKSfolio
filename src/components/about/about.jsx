import { AboutMeWindow } from "./about_me_window";
import { TextMessage } from "./text_message";

export function About() {

    const chillGuyImg = new URL("./img/chillguy.png", import.meta.url).href;
    const pancakesImg = new URL("./img/pancakes.png", import.meta.url).href
    const bikesImg = new URL("./img/bikes.png", import.meta.url).href
    return (
        <div className="">
            <img src={chillGuyImg} alt="chill guy" className="absolute top-14 right-16 w-1/4" />

            <div className="ml-[10%] text-3xl uppercase font-medium w-3/5 wrap-normal text-center">Я — Макс, начинающий веб-разработчик, человек, <span className="bg-highlight">горящий, а не выгорающий</span>, своим делом 🔥</div>
            <div className="mt-13 ml-[20%] text-3xl uppercase font-medium w-1/2 wrap-normal text-center">
                Моя цель — сделать так, чтобы моя работа не просто выполнялась, но 💫 <span className="bg-highlight">приносила миру что‑то новое</span>, улучшала жизнь и дарила эмоции людям, и я <span className="bg-highlight">готов на многое 🦾 ради своей цели</span>.
            </div>
            <AboutMeWindow className='ml-[5%] -mt-40 w-[12%]!' text='Еще очень люблю готовить блины'><img src={pancakesImg} alt="pancakes" /></AboutMeWindow>
            <AboutMeWindow className=' ml-[75%] -mt-10 w-[15%]!' text='И кайфую с байков'><img src={bikesImg} alt="bikes" /></AboutMeWindow>

            <div className="w-[890px] mx-auto flex flex-col gap-10 mt-5">
                <TextMessage isAnswer={false}>Расскажи про свой путь</TextMessage>
                <TextMessage isAnswer={true}>Начинал с верстки на HTML/CSS/JS, затем перешел к созданию веб-серверов. Сейчас основное направление — React и фронтенд-разработка. Учусь на реальных проектах, чтобы получать практические знания.</TextMessage>
                <TextMessage isAnswer={false}>Какие твои сильные стороны?</TextMessage>
                <TextMessage isAnswer={true}>Хард-скиллы, которые развиваю каждый день, но ключевая моя особенность — софт-скиллы. Работа в командах помогла прокачать лидерские качества (управление проектами, решение проблем) и навыки командного игрока (дедлайны, внимательность, поддержка коллег). Люблю сложные задачи и всегда открыт для новых вызовов.</TextMessage>
            </div>
        </div>
    )
}