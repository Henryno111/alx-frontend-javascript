/* eslint-disabled */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((photoResult) => createUser().then((userResult) => ({ photoResult, userResult })))
    .then(({ photoResult, userResult }) => {
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline:', error);
    });
}

handleProfileSignup();
