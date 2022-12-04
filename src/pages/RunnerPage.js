import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './LoaderPage.css';
import Triangle from '../images/Triangle.png'

function RunnerPage() {

    const navigate = useNavigate();

    return (
        <>
            <Grid container spacing={2} id='WhyBeam'>
                <Grid item xs={3}>
                    <Box className="tblContents">
                        <Typography mb={2} variant="h6" color="#555555">RUNNERS</Typography>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className="courseLeft" mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { navigate('/runner') }}>Interactive Tutorials</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className="courseLeft" mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/runtime/model/') }}>How Beam executes a pipeline</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className="courseLeft" mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/patterns/custom-windows/') }}>Custom Window Patterns</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className="courseLeft" mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/runners/capability-matrix/') }}>Beam Capability Matrix</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className="courseLeft" mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://amygdala.github.io/dataflow/app_engine/2017/10/24/gae_dataflow.html') }}>Running on AppEngine</Typography>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item xs={9} align-items="start">
                    <Stack spacing={1} mb={2} ml={1}>
                        <Stack direction="row" justifyContent="space-between" mr={3}>
                            <Typography variant="h4" fontWeight='bold'>Running Beam Pipelines</Typography>
                            <button className='headerBtn' onClick={() => navigate('/')}>Home</button>
                        </Stack>
                        <Typography variant="body2" color="#555555">In this module, learn to run the pipelines you previously created on different runners.</Typography>
                    </Stack>
                    <Box ml={1} mr={3} p={3} id='Prerequisites'>
                        <Stack direction="row">
                            <Typography mr={0.5} variant="body2" fontWeight="bold">Prerequisites:</Typography>
                            <Typography variant="body2">It is recommended that you have completed Configurations and are comfortable with basic Beam abstractions.</Typography>
                        </Stack>
                    </Box>
                    <Stack direction="row" justifyContent="space-between" id="CourseBtns">
                        <button className="configurations-normal" type="button" onClick={() => navigate('/config')}>Configurations</button>
                        <button className="transform-normal" type="button" onClick={() => navigate('/transform')}>Transforming</button>
                        <button className="running-highlight" type="button" onClick={() => navigate('/runner')}><div class="shift-up">Running</div></button>
                    </Stack>
                    <hr className="notebookDivider"></hr>

                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/1w-VQ0Dsu8heQmeQUSV4LsDUQCRjjIngy?usp=sharing') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Intro to Runners</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Interested in learning how to use Beam on different runners</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong> Introduction to key runners and data processing services that Beam supports.</Typography>
                                    <Typography variant="body2">10 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/15uzRO3kWYfwdJWv0nBCNZ83LJgKTepGs?usp=sharing') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Stream Processing</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Interested in learning how to use Beam on different runners</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong> Introduction to key runners and data processing services that Beam supports.</Typography>
                                    <Typography variant="body2">10 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/1EtY9fVGVwWldjMKRqewuXU95FdJ7w6s3?usp=sharing') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Dataflow Runner & GCP Tutorial</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Interested in learning how to use Beam on different runners</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>How to use user-defined functions and commposite transforms</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://www.cloudskillsboost.google/focuses/1159?locale=en&parent=catalog') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Simulate Historic Flights</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Dataflow, BigQuery</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Simulate real-time historic internal flights in the United States and store the resulting simulated data in BigQuery</Typography>
                                    <Typography variant="body2">60 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default RunnerPage;