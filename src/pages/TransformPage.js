import React from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './LoaderPage.css';
import Triangle from '../images/Triangle.png';

function TransformPage() {

    const navigate = useNavigate();

    return (
        <>
            <Grid container spacing={2} id='WhyBeam'>
                <Grid item xs={3}>
                    <Box className="tblContents">
                        <Typography mb={2} variant="h6" color="#555555">TRANSFORMS</Typography>

                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { navigate('/transform') }} >Interactive Tutorials</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/transforms/python/overview/') }}>Python Transform Catalog</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/transforms/java/overview/') }}>Java Transform Catalog</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/patterns/side-inputs/') }}>Side Input Patterns</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                            <img className='tocTri' src={Triangle} container={1} />
                            <Typography className='courseLeft' mb={2} sx={{ fontSize: 14 }} color="#555555" onClick={() => { window.open('https://beam.apache.org/documentation/io/connectors/') }}>I/O Connectors</Typography>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item xs={9} align-items="start">
                    <Stack spacing={1} mb={2} ml={1}>
                        <Stack direction="row" justifyContent="space-between" mr={3}>
                            <Typography variant="h4" fontWeight='bold'>Beam Transforms</Typography>
                            <button className='headerBtn' onClick={() => navigate('/')}>Home</button>
                        </Stack>
                        <Typography variant="body2" color="#555555">In this module, you will kickstart learning what a P-Transform is, how it is used, and advanced transforms.</Typography>
                    </Stack>
                    <Box ml={1} mr={3} p={3} id='Prerequisites'>
                        <Stack direction="row">
                            <Typography mr={0.5} variant="body2" fontWeight="bold">Prerequisites:</Typography>
                            <Typography variant="body2">It is recommended that you have completed Configurations and are comfortable with basic Beam abstractions.</Typography>
                        </Stack>
                    </Box>
                    <Stack direction="row" justifyContent="space-between" id="CourseBtns">
                        <button className="configurations-normal" type="button" onClick={() => navigate('/config')}>Configurations</button>
                        <button className="transform-highlight" type="button" onClick={() => navigate('/transform')}><div class="shift-up">Transforming</div></button>
                        <button className="running-normal" type="button" onClick={() => navigate('/runner')}>Running</button>
                    </Stack>

                    <hr className="notebookDivider"></hr>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/documentation/transforms/python/elementwise/map-py.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Map</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand Python and basic Beam components</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Applies a simple one-to-one mapping function over each element in the collection.</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/documentation/transforms/python/elementwise/flatmap-py.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">FlatMap</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand Python and basic Beam components</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Applies a simple one-to-many mapping function over each element in the collection which are then flattened into the resulting collection.</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/documentation/transforms/python/elementwise/filter-py.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Filter</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand Python and basic Beam components</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Given a predicate, filter out all elements that don’t satisfy that predicate.</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/documentation/transforms/python/elementwise/partition-py.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Partition</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand Python and basic Beam components</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Separates elements in a collection into multiple output collections.</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/documentation/transforms/python/elementwise/pardo-py.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">ParDo</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>Understand Python and basic Beam components</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>A transform for generic parallel processing. It’s recommended to use Map, FlatMap, Filter or other more specific transforms when possible.</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/1kuK4pxAZgWOVUXtqC_gG7YZt6RgcBAgY?usp=sharing') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Introduction to Advanced Transforms</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>A good understanding of using PTransforms</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>How to use user-defined functions and commposite transforms</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/github/apache/beam/blob/master/examples/notebooks/tour-of-beam/windowing.ipynb') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Windowing</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>A good understanding of using PTransforms and basic Beam components</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>How to aggregate data based on time intervals, or in streaming pipelines</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box ml={1} mr={3} mb={2} p={3} pt={2} pb={2} id='Notebook' onClick={() => { window.open('https://colab.research.google.com/drive/1XWAm8QOC2OWElkzKkhGoKYwt0Y1Kum1K?authuser=1#scrollTo=nfDDfM40wo-5') }}>
                        <Stack spacing={1}>
                            <Typography mr={0.5} variant="h6">Introduction to Windowing</Typography>
                            <Stack>
                                <Typography variant="body2"><strong>Prerequisites: </strong>A good understanding of using PTransforms and basic Beam components</Typography>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant="body2"><strong>Content: </strong>Alternate tutorial to learn windowing using a real-life example</Typography>
                                    <Typography variant="body2">30 min</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>

                </Grid>

            </Grid>
        </>
    )
}

export default TransformPage;

