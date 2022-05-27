import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import useAuth from "../hooks/useAuth";

export default function LetterAvatars() {
  const auth = useAuth();
  
  const firstName = auth?.user.user.firstName;
  const lastName = auth?.user.user.lastName;
  
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{firstName?.toString().substr(0,1)} {lastName?.toString().substr(0,1)}</Avatar>
    </Stack>
  );
}