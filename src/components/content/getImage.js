export default name => {
  switch (name) {
    case 'PortraitOfYuanTungLi.jpg':
      return require('./images/PortraitOfYuanTungLi.jpg');
    case 'FairbankLetter.jpg':
      return require('./images/FairbankLetter.jpg');
    case 'MicrofilmedforGenealogicalSocietyOfSaltLakeCity.jpg':
      return require('./images/MicrofilmedforGenealogicalSocietyOfSaltLakeCity.jpg');
    case 'Cover_Illustration.jpg':
      return require('./images/Cover_Illustration.jpg');
    default:
      console.error(`Could not get image with name ${name} in getImage().`);
      return null;
  }
};
