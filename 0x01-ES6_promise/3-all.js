import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    uploadPhoto().then((photoResponse) => {
      createUser().then((userResponse) => {
        resolve(`${userResponse.firstName} ${userResponse.lastName}`);
      }).catch((error) => {
        console.error('Error creating user:', error);
        reject('Signup system offline');
      });
    }).catch((error) => {
      console.error('Error uploading photo:', error);
      reject('Signup system offline');
    });
  });
}
