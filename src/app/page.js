"use client";

import * as React from 'react';
import { Grid, Box, Button, styled, TextField, OutlinedInput, InputLabel } from '@mui/material';
import CreditCard from './components/credit-card'


export default function Home() {

  const [cardHolder, setCardHolder] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expMonth, setExpMonth] = React.useState("");
  const [expYear, setExpYear] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [cvcClick, setCvcClick] = React.useState(false);


  return (
    <section>
      <div style={styles.leftBg}>
        <CreditCard cvcClick={cvcClick} cardInfo={{
          name: cardHolder,
          number: cardNumber,
          month: expMonth,
          year: expYear,
          cvc: cvc
        }} />
      </div>

      <Box component="form"
        sx={{
          p: 2,
          width: '35vw',
          position: 'absolute',
          right: '0',
          bottom: '0',
          marginBottom: '30vh',
          marginRight: '16vw',
          fontFamily: 'monospace',
          fontWeight: '800',
          display: 'grid',
          gap: '2vw'
        }}>

        <div>
          <InputLabel style={styles.inputLabel}>CARDHOLDER NAME</InputLabel>
          <OutlinedInput
            style={styles.outlinedInput}
            placeholder="e.g. Jake Neverland"
            onChange={e => setCardHolder(e.target.value)}
            inputProps={{ maxLength: 28 }}
          />
        </div>

        <div>
          <InputLabel style={styles.inputLabel}>CARD NUMBER</InputLabel>
          <OutlinedInput
            style={styles.outlinedInput}
            placeholder="e.g. 0000 0000 0000 0000"
            onChange={e => setCardNumber(e.target.value)}
            inputProps={{ maxLength: 16 }}
          />
        </div>
        <div style={styles.bottomInfo}>
          <div style={styles.bottomInputs}>
            <InputLabel style={styles.inputLabel}>EXP. DATE (MM/YY)</InputLabel>
            <div style={styles.inlineBotInputs}>
              <OutlinedInput
                style={styles.outlinedInputBottom}
                placeholder="MM"
                onChange={e => setExpMonth(e.target.value)}
                inputProps={{ maxLength: 2, max: 12 }}

              />
              <OutlinedInput style={styles.outlinedInputBottom}
                placeholder="YY"
                onChange={e => setExpYear(e.target.value)}
                inputProps={{ maxLength: 2 }}
              />
            </div>

          </div>
          <div style={styles.cvcStyle}>
            <InputLabel style={styles.inputLabel}>CVC</InputLabel>
            <OutlinedInput style={styles.outlinedInput}
              placeholder="e.g. 123"
              onChange={e => setCvc(e.target.value)}
              onFocus={() => setCvcClick(true)}
              onBlur={() => setCvcClick(false)}
              inputProps={{ maxLength: 3 }}

            />
          </div>
        </div>

        <ConfirmButton variant="contained">Confirm</ConfirmButton>
      </Box>
    </section>
  )
}

const ConfirmButton = styled(Button)({
  backgroundColor: '#2b1649 !important',
  width: '100%',
  fontFamily: 'monospace !important',
  fontWeight: '800 !important',
  borderRadius: '15px',
  textTransform: 'none',
  height: '6vh',
  fontSize: '1.6vw',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
})



const styles = {
  inputLabel: {
    fontFamily: 'monospace',
    fontWeight: '800',
    color: '#4F1D95',
    fontSize: '1.5vw',

  },
  outlinedInput: {
    fontFamily: 'monospace',
    fontWeight: '800',
    fontSize: '1.5vw',
    width: '100%',
    borderRadius: '15px'

  },
  inputLine: {
    display: 'inline-flex',
  },
  inputLineSize: {
    width: '10vw'
  },
  leftBg: {
    height: '100%',
    width: '40%',
    background: 'linear-gradient(90deg, #2b1649 52%, #571255 69%, #2b1649 100%);',
    position: 'absolute'
  },
  bottomInfo: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexFirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  outlinedInputBottom: {
    fontFamily: 'monospace',
    fontWeight: '800',
    fontSize: '1.5vw',
    width: '6vw',
    borderRadius: '15px'

  },
  bottomInputs: {
    display: 'flex',
    flexDirection: 'column'
  },
  inlineBotInputs: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  cvcStyle: {
    display: 'inline-flex',
    alignItems: 'baseline',
    flexDirection: 'column',
    alignContent: 'flex-end',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '15vw'
  }
}