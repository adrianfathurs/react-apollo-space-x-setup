import Box from '@mui/material/Box';

export default function LaunchCard({data}){
  return(
    <>
      <Box>
          <h3>Flight Number: {data.flight_number}</h3>
          <h4>Launchpad Number: {data.launchpad}</h4>
          {
            data.cores.map((y, indexs) => (
              <div key={indexs}>
                <h5>Core Number:{y.core}</h5>
              </div>
            ))
          }
      </Box>
    </>
  )
}