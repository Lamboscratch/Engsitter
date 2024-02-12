import { Flex } from "@radix-ui/themes";
import ContainerApp from "../Components/ContainerApp";
import HeadingPrimary from "../Components/HeadingPrimary";
import LanguageBox from "../Components/LanguageBox";

const index = () => {
    const dataPython = {
        language: "Python",
        text: [
            {
                title: "Lorem1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem7",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
        ],
    };

    const dataJavascript = {
        language: "Javascript",
        text: [
            {
                title: "Lorem1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
            {
                title: "Lorem7",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis ratione est odit sequi quisquam possimus facilis repellat qui mollitia?",
            },
        ],
    };

    return (
        <ContainerApp>
            <HeadingPrimary></HeadingPrimary>
            <Flex gap="5">
                <LanguageBox language={dataPython.language} text={dataPython.text}></LanguageBox>
                <LanguageBox language={dataJavascript.language} text={dataJavascript.text}></LanguageBox>
            </Flex>
        </ContainerApp>
    );
};

export default index;
