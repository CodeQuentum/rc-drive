const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');

dotenv.config();

sgMail.setApiKey(process.env.SEND_GRID);

const emailUser = process.env.EMAIL_USER;
const sendHere = process.env.EMAIL_TO_SEND;

exports.envoyerCourriel = async (req, res) => {
  try {
      const { clientName, email, phoneNumber, selectedService, selectedGamme, passengerCounts, luggageCounts, departureAddress, arrivalAddress, pickupDateTime } = req.body;
      const msg = {
          to: sendHere,
          from: emailUser,
          subject: 'Nouveau message du formulaire de contact',
          text: `
              Vous avez reçu une nouvelle demande de devis !!
              \nNom : ${clientName}
              \nEmail : ${email}
              \nTéléphone : ${phoneNumber}
              \nService : ${selectedService}
              \nGamme : ${selectedGamme}
              \nPassagers : ${JSON.stringify(passengerCounts)}
              \nBagages : ${JSON.stringify(luggageCounts)}
              \nAdresse de départ : ${departureAddress}
              \nAdresse d'arrivée : ${arrivalAddress}
              \nDate et heure de prise en charge : ${pickupDateTime}
          `,
      };
      await sgMail.send(msg);

      // Réponse en cas de succès
      res.status(200).send('E-mail envoyé avec succès.');
  } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      res.status(500).send("Une erreur s'est produite lors de l'envoi de l'e-mail.");
  }
};