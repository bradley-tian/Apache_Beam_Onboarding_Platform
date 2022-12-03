import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './LoaderPage.css';

function LoaderPage() {

    const navigate = useNavigate();


    return (
        <>
            <Grid container spacing={2} id='WhyBeam'>
                <Grid item xs={3}>
                    <Box className="tblContents">
                        <Typography mb={2} variant="h6" color="#555555">ADDITIONAL RESOURCES</Typography>
                        <Typography className='addition' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => {window.open('https://beam.apache.org/documentation/basics/')}}>Basic Concepts of Beam</Typography>
                        <Typography className='addition' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => {window.open('https://beam.apache.org/documentation/pipelines/design-your-pipeline/')}}>Designing a Pipeline</Typography>
                        <Typography className='addition' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => {window.open('https://beam.apache.org/documentation/patterns/file-processing/#processing-files-as-they-arrive ')}}>File Processing Patterns</Typography>
                        <Typography className='addition' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => {window.open('https://beam.apache.org/documentation/glossary/ ')}}>Glossary</Typography>
                    </Box>
                </Grid>
                <Grid item xs={9} align-items="start">
                    <Box ml={1} mr={3} p={3} mb={1} id='Basics'>
                        <Stack direction="row" justifyContent="space-between" mr={3}>
                            <Typography variant="h4" fontWeight='bold'>Basics of Beam</Typography>
                            <button className='homeBtn' onClick={() => navigate('/')}>Home</button>
                        </Stack>
                        <Typography variant="body2">In this module, you will cover the basics of Beam, including what features Beam offers and a kickstart on learning P-Transforms.</Typography>
                    </Box>
                    <Box ml={1} mr={3} p={3} id='Prerequisites'>
                        <Stack direction="row">
                            <Typography mr={0.5} variant="body2" fontWeight="bold">Prerequisites:</Typography>
                            <Typography variant="body2">It is recommended that you are comfortable with at least one programming language and basic data-science concepts.</Typography>
                        </Stack>
                    </Box>
                    <Stack direction="row" justifyContent="space-between" id="CourseBtns">
                        <button className="configurations-highlight" type="button" onClick={() => navigate('/loader')}><div class="shift-up">Configurations</div></button>
                        <button className="transform-normal" type="button" onClick={() => navigate('/transform')}>Transforming</button>
                        <button className="running-normal" type="button" onClick={() => navigate('/runner')}>Running</button>
                    </Stack>

                    <hr className="notebookDivider"></hr>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/1qEF_Isa8QPMoalE83ZawK4EQiLKj6N--#scrollTo=42B-64Lvef3K') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Intro to Beam</Typography>
                            <Stack>
                                <Typography variant="body2">Prerequisites: at least one programming language</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2">Content: What is Apache Beam?</Typography>
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

export default LoaderPage;