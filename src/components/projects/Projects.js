import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import './projects.scss';
import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import ProjectCard from './ProjectCard';

export default class Projects extends React.Component {
  
  render() {
    return (
      <Grid container direction={'column'}>
        <Header activeTab={'projects'}></Header>
        <Container className='projects'>
          <h1>Projects</h1>
          <Grid container>
            <Grid item xs={12}>
              <ProjectCard name={'Mass Hike'} type={'Research, UX Design, and Visual Design'} link={"mass-hike"} img={"masshike.svg"}></ProjectCard>
              <ProjectCard name={'Contuity'} type={'Research, UX Design, and Development'} link={"contuity"} img={"contuity.png"}></ProjectCard>
              <ProjectCard name={'Ordering on BevSpot'} type={'Research, UX Design, and Visual Design'} link={"bevspot"} img={"masshike.svg"}></ProjectCard>
              <ProjectCard name={'Agnès Varda Poster'} type={'Typography, Print Design'} link={"agnes"} img={"masshike.svg"}></ProjectCard>
              <ProjectCard name={'Drink Price Tool Landing Page'} type={'Web Design and Development'} link={"dpt"} img={"masshike.svg"}></ProjectCard>
              <ProjectCard name={'Online Resources'} type={'UX Design and Visual Design'} link={"online-resources"} img={"resources.svg"}></ProjectCard>
            </Grid>
          </Grid>
        </Container>
        <Footer></Footer>
      </Grid>
    );
  }
}
