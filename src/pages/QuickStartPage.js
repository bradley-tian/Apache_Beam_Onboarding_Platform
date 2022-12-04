import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Stack, Avatar } from "@mui/material";
import "./GetStarted.css";
import "./LoaderPage.css";
import Icon1 from '../images/Icon1.png';
import Icon2 from '../images/Icon2.png';
import Icon3 from '../images/Icon3.png';
import Icon4 from '../images/Icon4.png';
import RunnerLogos from '../images/RunnerLogos.png';
import LanguageLogos from '../images/LanguageLogos.png';

export default function QuickStartPage() {
    const navigate = useNavigate();

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    const [hover6, setHover6] = useState(false);

    const handleHover = (index) => {
        switch (index) {
            case 0: setHover1(true); break;
            case 1: setHover2(true); break;
            case 2: setHover3(true); break;
            case 3: setHover4(true); break;
            case 4: setHover5(true); break;
            case 5: setHover6(true); break;
        }
    }

    const handleExit = (index) => {
        switch (index) {
            case 0: setHover1(false); break;
            case 1: setHover2(false); break;
            case 2: setHover3(false); break;
            case 3: setHover4(false); break;
            case 4: setHover5(false); break;
            case 5: setHover6(false); break;
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}> 
                    <Box className="whyBeam">
                        <Typography mb={2} variant="h6" color="#555555" fontWeight="bold">WHY BEAM</Typography>
                        <Stack direction="row" spacing={2} mb={1} alignItems='center'>
                            <Avatar src={Icon1} container={1} />
                            <Stack>
                                <Typography color="#555555" fontSize="40" fontWeight="bold">Powerful Abstraction</Typography>
                                <Typography sx={{ fontSize: 11 }}>Powerful abstractions that omit low-level details of distributed data processing, such as coordinating individual workers, reading from sources and writing to sinks, etc.</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2} mb={1} alignItems='center'>
                            <Avatar src={Icon2} container={1} />
                            <Stack>
                                <Typography color="#555555" fontSize="40" fontWeight="bold">Unified Models</Typography>
                                <Typography sx={{ fontSize: 11 }}>A simplified, single programming model for both batch and streaming use cases.</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2} mb={1} alignItems='center'>
                            <Avatar src={Icon3} container={1} />
                            <Stack>
                                <Typography color="#555555" fontSize="40" fontWeight="bold">Ease of Adoption</Typography>
                                <Typography sx={{ fontSize: 11 }}>Apache Beam is easy to adopt and implement because it abstracts you from low-level details and provides freedom of choice between programming languages.</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2} mb={1} alignItems='center'>
                            <Avatar src={Icon4} container={1} />
                            <Stack>
                                <Typography color="#555555" fontSize="40" fontWeight="bold">Extensibility</Typography>
                                <Typography sx={{ fontSize: 11 }}>Apache Beam is open source and extensible. Multiple projects are built on top of Apache Beam and leverage its ability to “write once, run anywhere.”</Typography>
                            </Stack>
                        </Stack>
                        <Stack spacing={1} mt={3} mb={3}>
                            <Typography fontWeight="bold" fontSize="32" color="#555555">Write Once, Run Anywhere</Typography>
                            <img src={RunnerLogos} />
                        </Stack>
                        <Stack spacing={1} mt={3}>
                            <Typography fontWeight="bold" fontSize="32" color="#555555">Create Multi-Language Pipelines</Typography>
                            <img src={LanguageLogos} />
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={9} align-items="start">
                    <Stack spacing={1} mb={2} ml={1}>
                        <Stack direction="row" justifyContent="space-between" mr={3}>
                            <Typography variant="h5" fontWeight='bold' color="#555555">Welcome to Apache Beam!</Typography>
                            <button className='backBtn' onClick={() => navigate('/')}>Back</button>
                        </Stack>
                        <Typography variant="body2" color="#555555">Learn to use Beam to create data-processing pipelines that run on supported processing back-ends.</Typography>
                        <div className='quickStart'>
                            <div className='quickstartFrame1' onMouseEnter={() => { handleHover(0) }} onMouseLeave={() => { handleExit(0) }}>
                                {
                                    hover1
                                        ? <div className="overviewButton" id='overview1'>
                                            <p>LEARN THE BASICS</p>
                                            <button onClick={() => { window.open('https://colab.research.google.com/drive/1qEF_Isa8QPMoalE83ZawK4EQiLKj6N--?usp=sharingle.com') }}>OPEN IN COLAB</button>
                                        </div>
                                        : <button className="quickstartButton" id="start1" >LEARN THE BASICS</button>
                                }
                            </div>
                            <div className='quickstartFrame2' onMouseEnter={() => { handleHover(1) }} onMouseLeave={() => { handleExit(1) }}>
                                {
                                    hover2
                                        ? <div className="overviewButton" id='overview2'>
                                            <p>ADVANCED TRANSFORMS</p>
                                            <button onClick={() => { window.open('https://colab.research.google.com/drive/1rThhzXCrtxcivNfw9Zgt2SHZCFjwUcyI?usp=sharing') }}>OPEN IN COLAB</button>
                                        </div>
                                        : <button className="quickstartButton" id="start2" >ADVANCED TRANSFORMS</button>
                                }
                            </div>
                            <div className='quickstartFrame3' onMouseEnter={() => { handleHover(2) }} onMouseLeave={() => { handleExit(2) }}>
                                {
                                    hover3
                                        ? <div className="overviewButton" id='overview3'>
                                            <p>INTRO TO RUNNERS</p>
                                            <button onClick={() => { window.open('https://colab.research.google.com/drive/1w-VQ0Dsu8heQmeQUSV4LsDUQCRjjIngy?usp=sharing') }}>OPEN IN COLAB</button>
                                        </div>
                                        : <button className="quickstartButton" id="start3" >INTRO TO RUNNERS</button>
                                }
                            </div>
                            <div className='quickstartFrame4' onMouseEnter={() => { handleHover(3) }} onMouseLeave={() => { handleExit(3) }}>
                                {
                                    hover4
                                        ? <div className="overviewButton" id='overview4'>
                                            <p>WINDOWING IN BATCH PROCESSING</p>
                                            <button onClick={() => { window.open('https://colab.research.google.com/drive/1XWAm8QOC2OWElkzKkhGoKYwt0Y1Kum1K?usp=sharing') }}>OPEN IN COLAB</button>
                                        </div>
                                        : <button className="quickstartButton" id="start4" >WINDOWING IN BATCH PROCESSING</button>
                                }
                            </div>
                            <div className='quickstartFrame5' onMouseEnter={() => { handleHover(4) }} onMouseLeave={() => { handleExit(4) }}>
                                {
                                    hover5
                                        ? <div className="overviewButton" id='overview5'>
                                            <p>STREAM REAL-TIME PROCESSING</p>
                                            <button onClick={() => { window.open('https://colab.research.google.com/drive/1XWAm8QOC2OWElkzKkhGoKYwt0Y1Kum1K?usp=sharing') }}>OPEN IN COLAB</button>
                                        </div>
                                        : <button className="quickstartButton" id="start5" >STREAM REAL-TIME PROCESSING</button>
                                }
                            </div>
                            <div className='quickstartFrame6' onMouseEnter={() => { handleHover(5) }} onMouseLeave={() => { handleExit(5) }}>
                                {
                                    hover6
                                        ? <div className="overviewButton" id='overview6'>
                                            <p>EXAMPLE PROJECT</p>
                                            <button onClick={() => { }}>OPEN IN COLAB</button>
                                        </div>
                                        : <button className="quickstartButton" id="start6" >EXAMPLE PROJECT</button>
                                }
                            </div>
                        </div>
                    </Stack>
                </Grid>
            </Grid>
            <div className="buttonNav">
                <Stack spacing={1} ml={1} mb={2}>
                    <Typography variant="h5" fontWeight='bold' color="#555555">Learn more about Beam</Typography>
                    <Typography variant="body2" color="#555555">See more resources to learn Beam grouped by process</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" id="CourseBtns" ml={3}>
                    <button className="GSButton" id="confGS" onClick={() => navigate('/config')}>Configurations</button>
                    <button className="GSButton" id="transGS" onClick={() => navigate('/transform')}>Transforming</button>
                    <button className="GSButton" id="runGS" onClick={() => navigate('/runner')}>Running</button>
                </Stack>
                <Stack direction="row" justifyContent="space-between" id="CourseBtns" mt={3} ml={3}>
                    <div id='beamFrame1'>
                        <h6 className='frameText'>Learn the different ways Apache Beam’s pipelines can be configured, from basic pipeline parameters to Spark runners.</h6>
                    </div>
                    <div id='beamFrame2'>
                        <h6 className='frameText'>Operations in your pipeline that provide you a general processing framework for working in Apache Beam.</h6>
                    </div>
                    <div id='beamFrame3'>
                        <h6 className='frameText'>Apache Beam uses runners to execute pipelines on your machine, validating pipelines to adhere closely to the model.</h6>
                    </div>
                </Stack>
            </div>
            <div>
                <Stack spacing={1} ml={3} mt={4}>
                    <Typography variant="h5" fontWeight='bold' color="#555555">Resources and Next Steps</Typography>
                    <Typography variant="body2" color="#555555">Enforce and expand your knowledge of Beam with more in-depth materials.</Typography>
                </Stack>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box id="Resources">
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} ml={3} mr={3} pt={2} pb={2}>
                                <Typography variant="h6" color="#555555">Apache Beam Quickstart Guide - Java</Typography>
                                <button className='learnMore' onClick={() => { window.open('https://beam.apache.org/get-started/quickstart-java/') }}>Learn More</button>
                            </Stack>
                        </Box>
                        <Box id="Resources">
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} ml={3} mr={3} pt={2} pb={2}>
                                <Typography variant="h6" color="#555555">Apache Beam Quickstart Guide - Python</Typography>
                                <button className='learnMore' onClick={() => { window.open('https://beam.apache.org/get-started/quickstart-py/') }}>Learn More</button>
                            </Stack>
                        </Box><Box id="Resources">
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} ml={3} mr={3} pt={2} pb={2}>
                                <Typography variant="h6" color="#555555">Apache Beam Quickstart Guide - Go</Typography>
                                <button className='learnMore' onClick={() => { window.open('https://beam.apache.org/get-started/quickstart-go/') }}>Learn More</button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box id="Resources">
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} ml={3} mr={3} pt={2} pb={2}>
                                <Typography variant="h6" color="#555555">Additional Examples: Word Counter Variants</Typography>
                                <button className='learnMore' onClick={() => { window.open('https://beam.apache.org/get-started/wordcount-example/') }}>Learn More</button>
                            </Stack>
                        </Box><Box id="Resources">
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} ml={3} mr={3} pt={2} pb={2}>
                                <Typography variant="h6" color="#555555">Additional Examples: Mobile Gaming Pipelines</Typography>
                                <button className='learnMore' onClick={() => { window.open('https://beam.apache.org/get-started/mobile-gaming-example/') }}>Learn More</button>
                            </Stack>
                        </Box><Box id="Resources">
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} ml={3} mr={3} pt={2} pb={2}>
                                <Typography variant="h6" color="#555555">Explore the Beam Community</Typography>
                                <button className='learnMore' onClick={() => { window.open('https://beam.apache.org/community/') }}>Learn More</button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}