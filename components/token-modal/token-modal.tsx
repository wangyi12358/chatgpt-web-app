'use cl'

import { getCookie, setCookie } from '@/utils/cookie';
import { Box, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface TokenModalProps {

}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  px: 2,
  py: 3,
};

export const TokenModal: React.FC<TokenModalProps> = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')

  useEffect(() => {
    const openApiToken = getCookie('openApiToken')
    if (!openApiToken) {
      setOpen(true);
    }
  }, [])

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          设置 Open API Token
        </Typography>
        <form
          onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()
            if (!input) return;
            setCookie('openApiToken', input, 2);
            setOpen(false);
          }}
        >
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            className='mt-3'
            fullWidth
            label="Token"
          />
        </form>
      </Box>
    </Modal>
  );
};