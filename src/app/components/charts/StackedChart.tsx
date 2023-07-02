import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
// import ReactApexChart from 'react-apexcharts'
import { Box } from '@chakra-ui/react';

import dynamic from 'next/dynamic';


const ReactApexChart  =  dynamic(()=> import("react-apexcharts"))


type StackedChartProps = {
    categories: any[]; data: any,
    yaxisShow?: boolean
}



const StackedChart = ({categories, data , yaxisShow= false}: StackedChartProps) => {


    return (
        <Box  h='100%' >
            <ReactApexChart 
                options={{
                    xaxis: {
                        categories,
                        labels: {
                            show: true,
                            style: {
                                colors: '#A3AED0',
                                fontSize: '10px',
                                fontWeight: '500'
                            }
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        }
                    },
                    chart: {
                        stacked: true,
                        toolbar: {
                            show: false
                        }
                    },
                    tooltip: {
                        style: {
                            fontSize: '10px'
                        },
                        theme: 'dark'
                    },

                    yaxis: {
                        labels: {
                            show: yaxisShow,
                            style: {
                                colors: '#A3AED0',
                                fontSize: '10px',
                                fontWeight: '500'
                            }
                        }
                    },
                    grid: {
                        borderColor: 'rgba(163, 174, 208, 0.3)',
                        show: false,
                        yaxis: {
                            lines: {
                                show: true,
                            }
                        },
                        xaxis: {
                            lines: {
                                show: false
                            }
                        }
                    },
                    fill: {
                        type: 'solid',
                        colors: [ '#47a8f7', '#f3a23a', '#7f80e9' ]
                    },
                    legend: {
                        show: false
                    },
                    colors:  [ '#47a8f7', '#f3a23a', '#7f80e9' ],
                    dataLabels: {
                        enabled: false
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: '10px',
                        
                        }
                    }
                }}
                series={data}
                // type='line'
                type="bar"
                width={"100%"} height={320}
            />
        </Box>
    )
}


export default StackedChart


