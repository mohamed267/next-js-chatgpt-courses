"use client"
import { Box, Flex } from "@chakra-ui/react";
import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("../Editor/Editor"), {
  ssr: false,
});


const ScrollArea = dynamic(
  () => import('react-scrollbar'),
  { ssr: false }
)

const ChapterContent = ({chapter}: any) => {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>();
  return (
    <Flex justifyContent="center" minH="100vh"  align="center" py='50px'  > 
        <Box bg="white" minW="800px" minH="80M" maxH="100vh"  borderRadius="30px" px='30px' >
                <ScrollArea 
                speed={0.8}
                horizontal={false}
                style={{
                    height:"100vh",
                }}
                >
                        <EditorBlock data={chapter?.content} onChange={setData} holder="editorjs-container" />
                </ScrollArea>
        </Box>
    </Flex>
  );
};

export default ChapterContent;
