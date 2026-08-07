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