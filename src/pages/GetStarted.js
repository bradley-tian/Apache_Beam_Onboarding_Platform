import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Stack } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './GetStarted.css';
import './LoaderPage.css';
import Icon1 from '../images/Icon1.png';
import Icon2 from '../images/Icon2.png';
import Icon3 from '../images/Icon3.png';
import Icon4 from '../images/Icon4.png';
import RunnerLogos from '../images/RunnerLogos.png';
import LanguageLogos from '../images/LanguageLogos.png';
import Triangle from '../images/Triangle.png';


function GetStartedPage() {

    const navigate = useNavigate();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3} mb={2.1}>
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
                <Grid item xs={9} align-items="start" mb={.5}>
                    <Stack spacing={1} mb={2} ml={1}>
                        <Typography variant="h5" fontWeight='bold' color="#555555">Welcome to Apache Beam!</Typography>
                        <Typography variant="body2" color="#555555">Learn to use Beam to create data-processing pipelines that run on supported processing back-ends.</Typography>
                    </Stack>
                    <Box className="qsBtn" sx={{ width: .98, height: .5, mb: 2 }}>
                        <Stack justifyContent="center" alignItems="center" spacing={3} direction='column'>
                            <Stack justifyContent="center" alignItems="center" spacing={1}>
                                <h4 className="headerText">New to Beam?</h4>
                                <Typography color="white" sx={{fontSize: 18}} >Check out the quickstart tutorial!</Typography>
                            </Stack>
                            <button className="imgBtn" onClick={() => navigate('/quickstart')}>START HERE</button>
                        </Stack>
                    </Box>
                    <Box className="cBtn" sx={{ width: .98, height: .3, mb: 2 }}>
                        <Stack spacing={1} ml={5}>
                            <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>Ready for more?</Typography>
                            <Typography color="white" fontSize="30" margin-bottom='8'>Try an end-to-end example using real-world data.</Typography>
                        </Stack>
                        <button className="imgBtn" mr={5} onClick={() => navigate('/quickstart')}>TRY IT OUT!</button>
                    </Box>
                </Grid>
            </Grid>
            <div className="buttonNav">
                <Stack spacing={1} ml={1} mb={2}>
                    <Typography variant="h5" fontWeight='bold' color="#555555">Learn more about Beam</Typography>
                    <Typography variant="body2" color="#555555">Learn to use Beam to create data-processing pipelines that run on supported processing back-ends.</Typography>
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
            </div >
            <div>
            <Stack spacing={1} ml={3} mb={4} mt={5}>
                <Typography variant="h5" fontWeight='bold' color="#555555">Use Cases</Typography>
                <Typography variant="body2" color="#555555">Try your hand at different real-world examples</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" id="CourseBtnsHome" mt={3} ml={3} spacing={4}>
                <Box pb={1} sx={{backgroundColor: "white", border: 2, borderRadius: "10px", borderColor: 'orange', width: '50%', height: 150}}>
                    <Typography fontSize="18px" p={2} fontWeight="bold">Machine Learning</Typography>
                    <Stack direction="row" alignItems="center" spacing={2} mb={1} pl={4}>
                        <img className='tocTri' src={Triangle} container={1}/>
                        <Typography className='courseLeft' mb={2} sx={{fontSize: 14}} color="#555555" onClick={() => window.open('https://beam.apache.org/documentation/sdks/python-machine-learning/')}>Machine Learning with Python using the RunInference API</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2} mb={1} pl={4}>
                        <img className='tocTri' src={Triangle} container={1}/>
                        <Typography className='courseLeft' mb={2} sx={{fontSize: 14}} color="#555555" onClick={() => window.open('https://cloud.google.com/dataflow/docs/tutorials/molecules-walkthrough')}>Machine Learning Preprocessing and Prediction</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2} mb={1} pl={4}>
                        <img className='tocTri' src={Triangle} container={1}/>
                        <Typography className='courseLeft' mb={2} sx={{fontSize: 14}} color="#555555" onClick={() => window.open('https://cloud.google.com/blog/products/ai-machine-learning/pre-processing-tensorflow-pipelines-tftransform-google-cloud')}>Machine Learning Preprocessing</Typography>
                    </Stack>
                </Box>
                <Box pb={1} sx={{backgroundColor: "white", border: 2, borderRadius: "10px", borderColor: 'orange', width: '50%', height: 150}}>
                    <Typography fontSize="18px" p={2} fontWeight="bold">Advanced Concepts</Typography>
                    <Stack direction="row" alignItems="center" spacing={2} mb={1} pl={4}>
                        <img className='tocTri' src={Triangle} container={1}/>
                        <Typography className='courseLeft' mb={2} sx={{fontSize: 14}} color="#555555" onClick={() => window.open('https://amygdala.github.io/dataflow/app_engine/2017/10/24/gae_dataflow.html')}>Running on AppEngine</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2} mb={1} pl={4}>
                        <img className='tocTri' src={Triangle} container={1}/>
                        <Typography className='courseLeft' mb={2} sx={{fontSize: 14}} color="#555555" onClick={() => window.open('https://beam.apache.org/blog/2017/02/13/stateful-processing.html')}>Stateful Processing</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2} mb={13} pl={4}>
                        <img className='tocTri' src={Triangle} container={1}/>
                        <Typography className='courseLeft' mb={2} sx={{fontSize: 14}} color="#555555" onClick={() => window.open('https://beam.apache.org/blog/2017/08/28/timely-processing.html')}>Timely and Stateful Processing</Typography>
                    </Stack>
                </Box>
            </Stack>
        </div>
        
            <div>
            <Stack spacing={1} ml={3} mt={4}>
                <Typography variant="h5" fontWeight='bold' color="#555555">Resources and Next Steps</Typography>
                <Typography variant="body2" color="#555555">Additional materials.</Typography>
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
                </Box>
                <Box id="Resources">
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

export default GetStartedPage;