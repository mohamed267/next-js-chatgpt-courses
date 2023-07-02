import If from "common/If";
import { useDirectionContext } from "contexts/directionContext";
import React, { ComponentElement, PropsWithChildren, ReactNode } from "react";

interface Props {
  Left: any;
  Right?: any;
  style?: any
}

const Switcher = ({children , Left , Right ,  style ={}}: PropsWithChildren<Props>) => {
    const { dir } = useDirectionContext()


    return(
        <If condition={dir==="ltr"}
            otherwise={
                <Right
                    {...style}
                >
                    {
                        children
                    }
                </Right>
            }
        
        >
            <Left
                {...style}
            >
                {
                    children
                }
            </Left>
        </If>
    )
    
};

export default Switcher;
