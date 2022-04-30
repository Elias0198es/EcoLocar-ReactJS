import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import florest from '../assets/florest.png';
import { Image } from 'mui-image'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// coment-line

export default function LabTabs() {
    
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
        display="flex"
        flexDirection="column"
        sx={{
            height:"100vh",
            width: '100%',
            typography: 'body1',
            backgroundImage : `url(${florest})`,
            backgroundSize: "100% 100%",
            color: "white"
        }}>
      
      <TabContext value={value}>
        <Box 
            sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                height: '15%',
                borderBottom: 1,
                borderColor: 'divider'
            }}>
            <Box sx={{ ml: 3, height: '60%'}}><Image alt="logo" src='https://i.ibb.co/XjS840S/logo.png' /></Box>

            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="white" indicatorColor="secondary">
                <Tab label="Home" value="1" />
                <Tab label="Quem somos" value="2" />
                <Tab label="Porque alugar" value="3" />
            </TabList>

            <Box sx={{ mr: 3, width: '17vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button variant="contained" style={{ color: "black", backgroundColor: "#EDD929", borderRadius: 50 }}>Login</Button>
                <Button variant="contained"  style={{ color: "black", backgroundColor: "#EDD929", borderRadius: 50 }}>Cadastre-se</Button>
            </Box>
        </Box>

        <Box> 
            <TabPanel value="1">
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                     <Typography variant="h1" component="h2"> Alugue essa ideia</Typography>
                     <Typography mt={2} paragraph={true} sx={{fontSize: 20}}>
                        Todos nós somos inquilinos neste planeta,
                        por isso seja um morador consciente e acrescente mais vida a nosso planeta!
                     </Typography>
                </Box>
            </TabPanel>
            
            <TabPanel value="2">
                <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h2" component="h2" >Sobre nós</Typography>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Typography mt={2} paragraph={true} sx={{fontSize: 20, width: '35%'}}>
                            Conectamos proprietários que desejam alugar seu terreno
                            com empresas que ajudam a construir um mundo mais sustentável.
                        </Typography>

                        <Typography mt={2} paragraph={true} sx={{fontSize: 20, width: '35%'}}>
                            Nossa missão é unir pessoas e empresas com o mesmo propósito,
                            reduzir o impacto ambiental através do reflorestamento de terrenos.
                        </Typography>
                    </Box>
                </Box>
            </TabPanel>
            
            <TabPanel value="3">
                <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h2" component="h2"> Por que alugar?</Typography>
                    <Grid container mt={2} spacing={6} sx={{flexGrow:1, justifyContent: 'space-between'}}>
                        <Grid item xs={6}>
                            <Typography mt={2} paragraph={true} sx={{fontSize: 20}}>
                                As árvores plantadas oferecem muitos benefícios no clima,
                                na biodiversidade, saúde e emprego. Uma árvore armazena cerca de 150 Kg de CO2 por ano.
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography mt={2} paragraph={true} sx={{fontSize: 20 }}>
                                As árvores  podem resfriar o ar em até 8ºC, reduzindo a necessidade de ar condicionado em 30%.
                                As árvores são excelentes filtros de ar, removendo poluentes nocivos.
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography mt={2} paragraph={true} sx={{fontSize: 20 }}>
                                Em média, 40% das chuvas sobre a terra se originam da evapotranspiração das plantas.
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography mt={2} paragraph={true} sx={{fontSize: 20}}>
                                Mais de 70% das chuvas na bacia do Rio da Prata se originam da evatranspiração da floresta amazônica. 
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>
            </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
