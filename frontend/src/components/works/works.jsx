// import MediaQuery from "react-responsive";
import { Carousel } from "./carousel";
import { WorksLayout } from "./works-layout";

import { ResponsiveMiniWorkElement } from "./responsive-mini-work-element";
import { ResponsiveWorkElement } from "./responsive-work-element";

import { works } from "./works-mock";
import { miniWorks } from "./mini-works-mock";

export function Works() {
    return (
        <>
            <WorksLayout
                    worksTitle={"Последние проекты"}
                    worksContent={works.map((item, index) => (
                        <ResponsiveWorkElement
                            info={item}
                            key={index}
                        />
                    ))}
                    miniWorksTitle={"Мини-проекты"}
                    miniWorksContent={
                        <Carousel>
                            {miniWorks.map((item, index) => (
                                <ResponsiveMiniWorkElement info={item} key={index} />
                            ))}
                        </Carousel>
                    }
                />
        </>
    );
}

// import { WorkElement } from "./xl-work-element";
// import { MiniWorkElement } from "./xl-mini-work-element";
// import { SmWorkElement } from "./sm-work-element";
// import { SmMiniWorkElement } from "./sm-mini-work-element";

{/* <MediaQuery minWidth={1200}>
    <WorksLayout
        worksTitle={"Последние проекты"}
        worksContent={works.map((item, index) => (
            <WorkElement
                info={item}
                key={index}
                className={index !== 0 && "mt-11"}
            />
        ))}
        miniWorksTitle={"Мини-проекты"}
        miniWorksContent={
            <Carousel>
                {miniWorks.map((item, index) => (
                    <MiniWorkElement info={item} key={index} />
                ))}
            </Carousel>
        }
    />
</MediaQuery>
<MediaQuery maxWidth={1199} minWidth={800}>
    <WorksLayout
        worksTitle={"Последние проекты"}
        worksContent={works.map((item, index) => (
            <WorkElement
                info={item}
                key={index}
                className={index !== 0 && "mt-11"}
            />
        ))}
        miniWorksTitle={"Мини-проекты"}
        miniWorksContent={
            <Carousel>
                {miniWorks.map((item, index) => (
                    <MiniWorkElement info={item} key={index} />
                ))}
            </Carousel>
        }
    />
</MediaQuery>
<MediaQuery maxWidth={799}>
    <WorksLayout
        worksTitle={"Последние проекты"}
        worksContent={works.map((item, index) => (
            <SmWorkElement
                info={item}
                key={index}
                className={index !== 0 && "mt-11"}
            />
        ))}
        miniWorksTitle={"Мини-проекты"}
        miniWorksContent={
            <Carousel>
                {miniWorks.map((item, index) => (
                    <SmMiniWorkElement info={item} key={index} />
                ))}
            </Carousel>
        }
    />
</MediaQuery> */}