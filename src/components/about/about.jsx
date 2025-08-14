import { AboutLayout } from "./about-layout";
import { TextMessage } from "./text-message";

export function About() {
    const chillGuyImg = new URL("./img/chillguy.png", import.meta.url).href;
    const pancakesImg = new URL("./img/pancakes.png", import.meta.url).href;
    const bikesImg = new URL("./img/bikes.png", import.meta.url).href;
    return (
        <AboutLayout
            totemImageSrc={chillGuyImg}
            totemImageAlt="chill guy"
            // prettier-ignore
            text1={<>Я — Макс, начинающий веб-разработчик,</>}
            // prettier-ignore
            text2={<>человек, <Hl>горящий, а не выгорающий</Hl>, своим делом 🔥</>}
            // prettier-ignore
            text3={<>Моя цель — сделать так, чтобы моя работа не просто выполнялась, но 💫 <Hl>приносила миру что‑то новое</Hl>, улучшала жизнь и дарила эмоции людям,</>}
            // prettier-ignore
            text4={<>и я <Hl>готов на многое 🦾 ради своей цели</Hl>.</>}
            aboutText1="Еще очень люблю готовить блины"
            aboutSrc1={pancakesImg}
            aboutText2="И кайфую с байков"
            aboutSrc2={bikesImg}
            messages={
                <>
                    <TextMessage isAnswer={false}>
                        Расскажи про свой путь
                    </TextMessage>
                    <TextMessage isAnswer={true}>
                        Начинал с верстки на HTML/CSS/JS, затем перешел к
                        созданию веб-серверов. Сейчас основное направление —
                        React и фронтенд-разработка. Учусь на реальных проектах,
                        чтобы получать практические знания.
                    </TextMessage>
                    <TextMessage isAnswer={false}>
                        Какие твои сильные стороны?
                    </TextMessage>
                    <TextMessage isAnswer={true}>
                        Хард-скиллы, которые развиваю каждый день, но ключевая
                        моя особенность — софт-скиллы. Работа в командах помогла
                        прокачать лидерские качества (управление проектами,
                        решение проблем) и навыки командного игрока (дедлайны,
                        внимательность, поддержка коллег). Люблю сложные задачи
                        и всегда открыт для новых вызовов.
                    </TextMessage>
                </>
            }
        />
    );
}

function Hl({ children }) {
    // "Hl" stands for Highlight and is used to easily highlight text without using classes every time you need it
    return <span className="bg-highlight">{children}</span>;
}
