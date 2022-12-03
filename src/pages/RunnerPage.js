import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './LoaderPage.css';

function RunnerPage() {

    const navigate = useNavigate();

    return (
        <>
            <Grid container spacing={2} id='WhyBeam'>
                <Grid item xs={3}>
                    <Box className="tblContents">
                        <Typography mb={2} variant="h6" color="#555555">ADDITIONAL RESOURCES</Typography>
                        <Typography className='addition' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/runtime/model/')}}>How Beam Executes a Pipeline</Typography>
                        <Typography className='addition' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/patterns/custom-windows/')}}>Custom Window Patterns</Typography>
                        <Typography className='addition' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/runners/capability-matrix/') }}>Beam Capability Matrix</Typography>
                    </Box>
                </Grid>

                <Grid item xs={9} align-items="start">
                    <Box ml={1} mr={3} p={3} mb={1} id='Basics'>
                        <Stack direction="row" justifyContent="space-between" mr={3}>
                            <Typography variant="h4" fontWeight='bold'>Running Beam Pipelines</Typography>
                            <button className='homeBtn' onClick={() => navigate('/')}>Home</button>
                        </Stack>
                        <Typography variant="body2" color="#555555">In this module, you will be introduced to the various methods and platforms for deploying and running your Beam pipelines.</Typography>
                    </Box>
                    <Box ml={1} mr={3} p={3} id='Prerequisites'>
                        <Stack direction="row">
                            <Typography mr={0.5} variant="body2" fontWeight="bold">Prerequisites:</Typography>
                            <Typography variant="body2">It is recommended that you have completed Configurations, Transforms, and are comfortable with basic Beam abstractions.</Typography>
                        </Stack>
                    </Box>
                    <Stack direction="row" justifyContent="space-between" id="CourseBtns">
                        <button className="configurations-normal" type="button" onClick={() => navigate('/loader')}>Configurations</button>
                        <button className="transform-normal" type="button" onClick={() => navigate('/transform')}>Transforming</button>
                        <button className="running-highlight" type="button" onClick={() => navigate('/runner')}><div class="shift-up">Running</div></button>
                    </Stack>
                    <hr className="notebookDivider"></hr>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/1w-VQ0Dsu8heQmeQUSV4LsDUQCRjjIngy?usp=sharing') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Intro to Runners</Typography>
                            <Stack>
                                <Typography variant="body2">Prerequisites: Configurations Module, Transforms Module</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2">Content: Introduction to key runners and data processing services that Beam supports.</Typography>
                                    <Typography variant="body2">10 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook'>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Features of Beam</Typography>
                            <Stack>
                                <Typography variant="body2">Prerequisites: completion of Intro to Beam</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2">Content: What features Beam offers</Typography>
                                    <Typography variant="body2">15 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook'>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Basic Examples</Typography>
                            <Stack>
                                <Typography variant="body2">Prerequisites: completion of Features of Beam</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2">Content: Ground-level examples of what Beam is used for</Typography>
                                    <Typography variant="body2">10 min</Typography>
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