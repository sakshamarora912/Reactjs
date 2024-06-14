import React from "react";
import { Box, keyframes ,Text,VStack} from "@chakra-ui/react";
import { motion } from "framer-motion";

const circle = {
      zIndex:"1",position: "relative",background: "white",width: "60px",
      height: "60px",borderRadius: "50%",border:"4px solid #f86",boxShadow:"0px 0px 5px #f86",
}
const animate = keyframes ` from  {transform: scale(0)} to  {transform: scale(1)} `;
const animation = `${animate} 1s ease`;
const animate_2 = keyframes ` from  {transform: translateY(100%) scale(0)} to  {transform: translateY(0%) scale(1) } `;
const animation_2 = `${animate_2} 1s ease`;

const errorComponent = () => {
  return (
    <VStack>
    <Box mt={"10em"} alignItems={"align"} style={circle} as={motion.div} animation={animation}>
      <Box 
        as={motion.div}
        animation={animation}
        _before={{position: "relative",width: "40px",top: "1.4em",left: ".4em",transform:"rotateZ(50deg)", content: '" "', display: "block",height: "4px",bg: " #f86",boxShadow:"0px 0px 5px #f86"}}
        _after={{position: "relative",width: "40px",top: "1.3em",left: ".4em",transform:"rotateZ(-50deg)", content: '" "', display: "block",height: "4px",bg: " #f86",boxShadow:"0px 0px 5px #f86"}}>
      </Box>
    </Box>
    <Text style={{color:"#f86",fontSize:"2.5em",textShadow:"0px 0px 2px red"}}  as={motion.div} animation={animation_2}>OOPS!! SOMETHING WENT WRONG</Text>
    </VStack>
  );
};
export default errorComponent
