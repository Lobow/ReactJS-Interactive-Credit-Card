import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Logo from 'src/assets/campfire.svg';
import Lines from 'src/assets/lines.svg';

export default function CreditCard(props) {
  return (
    <div id='card' className={props.cvcClick ? 'flip' : 'back-flip'} style={{
      transformStyle: 'preserve-3d',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      margin: '30vh 0px 0px 16vw;',
    }}>
      <div id='front' style={{ position: 'absolute', backfaceVisibility: 'hidden' }}>
        <Box sx={{ p: 3 }} style={styles.cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img style={styles.imageCard} src={Logo.src} />
            </Grid>
            <Grid item xs={12}>
              <text style={styles.cardNumber}>{props.cardInfo.cardNumber !== '' ? props.cardInfo.cardNumber.replace(/(\d{4})(\d)/, '$1 $2').replace(/(\d{4})(\d)/, '$1 $2').replace(/(\d{4})(\d)/, '$1 $2') : "0000 0000 0000 0000"}</text>
            </Grid>
            <Grid item xs={8}>
              <text style={styles.cardText}>{props.cardInfo.cardHolder !== '' ? props.cardInfo.cardHolder.toUpperCase() : 'JAKE NEVERLAND'}</text>
            </Grid>
            <Grid alignItems="flex-end" style={{ textAlign: 'end' }} item xs={4}>
              <text style={styles.cardText}>{props.cardInfo.expMonth !== '' ? props.cardInfo.expMonth : '00'}/
                {props.cardInfo.expYear !== '' ? props.cardInfo.expYear : '00'}</text>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div id='back' style={{ position: 'absolute', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
        <Box sx={{ padding: '24px 0px 24px 0px' }} style={styles.cardStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div style={styles.blackLine}></div>
            </Grid>
            <Grid item xs={12} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={styles.cvcLine}>
                <text style={styles.cvcText}>{props.cardInfo.cvc !== '' ? props.cardInfo.cvc : '000'}</text>
              </div>
            </Grid>
            <Grid item xs={12} style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '0'
            }}>
              <div >
                <img style={{ width: '9.8vw' }} src={Lines.src} />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}


const styles = {
  cardText: {
    color: 'white',
    fontFamily: 'Cardo serif',
    fontSize: '1.5vw'

  },
  cardNumber: {
    color: 'white',
    fontFamily: 'Cardo serif',
    fontSize: '3vw'
  },
  imageCard: {
    width: '6vw'
  },
  blackLine: {
    background: 'linear-gradient(184deg, rgba(153,142,142,1) 20%, rgba(130,126,131,1) 84%)',
    height: '5vw',
  },
  cvcLine: {
    background: '#452e67',
    height: '3vw',
    width: '80%',
    borderRadius: '5px',
    textAlign: 'end',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cvcText: {
    color: 'white',
    fontFamily: 'Cardo serif',
    fontSize: '1.5vw',
    marginRight: '1vw'
  },
  cardStyle: {
    height: '20vw',
    width: '35vw',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, rgb(53 20 71) 20%, rgb(102 55 103) 100%, rgba(80,45,99,1) 74%, rgba(54,18,70,1) 86%)',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '2px 1px 23px -12px rgba(255,255,255,0.8)'
  }


}

