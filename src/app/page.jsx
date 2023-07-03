"use client";

import * as React from 'react';
import { Box, Button, styled, Modal, OutlinedInput, InputLabel } from '@mui/material';
import CreditCard from './components/credit-card'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Home() {

  const [formInfo, setFormInfo] = React.useState({ cardHolder: '', cardNumber: '', expMonth: '', expYear: '', cvc: '' })
  const [cvcClick, setCvcClick] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [disabledBtn, setDisabledBtn] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    activeConfirmBtn();
  }, [formInfo])

  const activeConfirmBtn = () => {
    if (Object.values(formInfo).every(item => item !== '')) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }
  const handleChange = (e) => {
    setFormInfo(form => ({ ...form, ...{ [e.target.name]: e.target.value } }));
  }

  return (
    <section>
      
      <div style={styles.leftBg}>
        <CreditCard cvcClick={cvcClick} cardInfo={formInfo} />
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
            name='cardHolder'
            onChange={e => handleChange(e)}
            inputProps={{ maxLength: 28 }}
          />
        </div>

        <div>
          <InputLabel style={styles.inputLabel}>CARD NUMBER</InputLabel>
          <OutlinedInput
            style={styles.outlinedInput}
            placeholder="e.g. 0000 0000 0000 0000"
            name='cardNumber'
            onChange={e => handleChange(e)}
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
                name='expMonth'
                onChange={e => handleChange(e)}
                inputProps={{ maxLength: 2, max: 12 }}
              />
              <OutlinedInput style={styles.outlinedInputBottom}
                placeholder="YY"
                name='expYear'
                onChange={e => handleChange(e)}
                inputProps={{ maxLength: 2 }}
              />
            </div>
          </div>
          <div style={styles.cvcStyle}>
            <InputLabel style={styles.inputLabel}>CVC</InputLabel>
            <OutlinedInput style={styles.outlinedInput}
              placeholder="e.g. 123"
              name='cvc'
              onChange={e => handleChange(e)}
              onFocus={() => setCvcClick(true)}
              onBlur={() => setCvcClick(false)}
              inputProps={{ maxLength: 3 }}
            />
          </div>
        </div>
        <ConfirmButton disabled={disabledBtn} onChange={activeConfirmBtn} onClick={handleOpen} variant="contained">Confirm</ConfirmButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: '50vw' }}>
            <CheckCircleIcon style={{
              color: '#2b1649',
              width: '10vw',
              height: '10vw'
            }} />
            <h2 id="parent-modal-title" style={styles.thanksLabel}>THANK YOU!</h2>
            <p id="parent-modal-description" style={styles.thanksDetailLabel}>
              We've added your card details.
            </p>
            <ConfirmButton onClick={handleClose} variant="contained">Continue</ConfirmButton>
          </Box>
        </Modal>
      </Box>
    </section>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2vw'
};

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
  '&.Mui-disabled': {
    boxShadow: 'none',
    backgroundColor: '#806c91 !important',
    borderColor: '#FFFFF',
    color: 'white !important'
  }
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
    background: 'linear-gradient(20deg, #22123f 16%,#894343 77%, #bf4747 85%, #9f9654 100%)',
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
  },

  thanksLabel: {
    fontFamily: 'monospace',
    fontWeight: '800',
    color: '#4F1D95',
    fontSize: '4vw'
  },
  thanksDetailLabel: {
    fontFamily: 'monospace',
    color: '#838383',
    fontSize: '2vw'
  }

}