"use client"

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, HStack, Input, Text } from '@chakra-ui/react'
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs'
import { number } from 'zod'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types'
import If from './If'

type RatingProps = {
    registration?: Partial<UseFormRegisterReturn> | null,
    value: number,
    numberStars?: number,
    changeable?: boolean , 
    setValue?: any,
    name?: string,
    size?: string
}

const Rating = ({ value , numberStars = 5 , size="12px", changeable=false , registration = null,  setValue=null , name="" }: RatingProps) => {
    const [stars ,setStars] =  useState<number[]>([]);
    const [starsValue , setStarsValue ]  =  useState<number>(0);


    useEffect( ()=>{
        const snapStars = []
        if(changeable){
            setValue(name , starsValue)
        }
        let snapValue =  starsValue;
        for(var  i=0 ; i<numberStars ; i++){
            console.log(`our ${i} ${value}`)
            if(snapValue<=0){
                snapStars.push(0)
            }

            if(snapValue >= 1){
                snapStars.push(1)
            }
            if(snapValue > 0  && snapValue < 1){
                snapStars.push(0.5)
            }

            snapValue = snapValue -  1;
        }
        
        setStars(snapStars)
    }, [starsValue])


    useEffect(()=>{
        setStarsValue(value)
       
    } , [value , numberStars])

    const handleRatingChange = (stars: number) =>{
        setStarsValue(stars)
        
    }


    return (
        <HStack  dir="ltr">
            {
                stars.map((number : number, key:any)=>{
                    return (
                        <Box 
                            // transform={`rotateY(${dir==="rtl" ? 180: 0 }deg)`} 
                            color="orange.500"
                            onClick={()=>{handleRatingChange(key + 1)}}
                            key={key}
                            // color="red"
                        >
                            <If condition={number===0} >
                                <BsStar fontSize={size}  key={key} />
                            </If>
                            <If condition={number===1} >
                                <BsStarFill  fontSize={size}  key={key} />
                            </If>
                            <If condition={number===0.5} >
                                <BsStarHalf fontSize={size}  key={key} />
                            </If>
                        
                        </Box>
                    )
                })
            }
        
        </HStack>
    )
}


export default Rating