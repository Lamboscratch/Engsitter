import ContainerApp from "@/app/Components/ContainerApp";
import HeadingPrimary from "@/app/Components/HeadingPrimary";
import Posts from "@/app/Components/Posts";
import TopicPosts from "@/app/Components/TopicPosts";
import React from "react";

const page = () => {
    return (
        <ContainerApp>
            <HeadingPrimary styles="!pb-11">Python</HeadingPrimary>
            <TopicPosts></TopicPosts>
        </ContainerApp>
    );
};

export default page;
