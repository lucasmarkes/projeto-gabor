import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export const AddRemoveCoinsButtonsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

});

export const SubmitInfoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem'
});

export const PageTitle = styled(Typography)({
  color: 'white' 
});


export const CoinsText = styled(Typography)({
  marginLeft: '1rem',
  color: 'white'
});

