import { Flex, Heading, Text } from "@radix-ui/themes";

interface Text {
    title: string;
    description: string;
}

interface Data {
    language: string;
    text: Text[];
}

const LanguageBox = ({ language, text }: Data) => {
    return (
        <Flex className="p-3 rounded-lg border-solid border-gray-200 border" direction="column">
            <Heading as="h2">{language}</Heading>
            <Flex direction="column">
                {text.map((item) => (
                    <Flex key={item.title} direction="column">
                        <Heading>{item.title}</Heading>
                        <Text>{item.description}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default LanguageBox;
