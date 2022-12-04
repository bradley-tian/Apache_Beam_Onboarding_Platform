import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './LoaderPage.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Triangle from '../images/Triangle.png';

function LoaderPage() {

    const navigate = useNavigate();


    return (
        <>
            <Grid container spacing={2} id='WhyBeam'>
                <Grid item xs={3}>
                    <Box className="tblContents">
                        <Typography mb={2} variant="h6" color="#555555">CONFIGURATIONS</Typography>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { navigate('/loader') }}>Interactive Tutorials</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/basics/') }}>Basic Concepts of Beam</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/pipelines/design-your-pipeline/') }}>Design Your Pipeline</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/patterns/file-processing/#processing-files-as-they-arrive') }}>File Processing Patterns</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/glossary/') }}>Glossary</Typography>
                        </Stack>

                    </Box>
                </Grid>
                <Grid item xs={9} align-items="start">
                    <Stack spacing={1} mb={2} ml={1}>
                        <Stack direction="row" justifyContent="space-between" mr={3}>
                            <Typography variant="h4" fontWeight='bold'>Basics of Beam</Typography>
                            <button className='headerBtn' onClick={() => navigate('/')}>Home</button>
                        </Stack>
                        <Typography variant="body2">In this module, you will cover the basics of Beam, including what features Beam offers and a kickstart on learning P-Transforms.</Typography>
                    </Stack>
                    <Box ml={1} mr={3} p={3} id='Prerequisites'>
                        <Typography variant="body2"><strong>Prerequisites: </strong>It is recommended that you are comfortable with at least one programming language and basic data-science concepts.</Typography>
                    </Box>
                    <Stack direction="row" justifyContent="space-between" id="CourseBtns">
                        <button className="configurations-highlight" type="button" onClick={() => navigate('/config')}><div class="shift-up">Configurations</div></button>
                        <button className="transform-normal" type="button" onClick={() => navigate('/transform')}>Transforming</button>
                        <button className="running-normal" type="button" onClick={() => navigate('/runner')}>Running</button>
                    </Stack>

                    <hr className="notebookDivider"></hr>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/1qEF_Isa8QPMoalE83ZawK4EQiLKj6N--#scrollTo=42B-64Lvef3K') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Intro to Beam</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand Python</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Interactive example-based introduction to learning the basics of Beam</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/tour-of-beam/getting-started.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Learn the Basics</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand Python</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Quick introduction to Beam using disconnected examples.</Typography>
                                    <Typography variant="body2">10 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/tour-of-beam/reading-and-writing-data.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Reading and Writing Data</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand the basic components of Beam</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong> Examples on how to read and write data to and from different data formats</Typography>
                                    <Typography variant="body2">10 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/tour-of-beam/dataframes.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Beam DataFrames</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand the basic components of Beam</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Learn to convert and interact between PCollections and Pandas DataFrames</Typography>
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