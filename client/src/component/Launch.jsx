import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LaunchCard from './LaunchCard';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LAUNCH_QUERY = gql`
  query{
    launches{
      flight_number,
      cores{
        core,
        flight
      },
      launchpad
    }
  }`
export default function Launch() {
  const { loading, error, data } = useQuery(LAUNCH_QUERY);
  console.log(data,"ini data")
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="App">
      <Grid container spacing={2}>
        {
          data.launches.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Item>
                <LaunchCard data={item}/>
              </Item>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}
