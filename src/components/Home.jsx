import React from 'react'

import Footer from './Footer'
import ResponsiveAppBar from './Header'
import { Container, Typography, Grid } from '@mui/material';
import Section from './Section';

function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Section title="Noël Écologique">
              <Typography paragraph>
                Conseils pour un Noël Écologique :
              </Typography>
              <Typography paragraph>
                - Décorations durables : Optez pour des décorations réutilisables, fabriquées à partir de matériaux durables, afin de réduire les déchets.
              </Typography>
              <Typography paragraph>
                - Cadeaux éthiques : Privilégiez les cadeaux durables, éthiques et locaux pour soutenir les petites entreprises et réduire l'empreinte carbone liée aux transports.
              </Typography>
              <Typography paragraph>
                - Emballages éco-responsables : Utilisez des emballages réutilisables, tels que des tissus ou des sacs en tissu, pour minimiser les déchets d'emballage.
              </Typography>
              <Typography paragraph>
                Partagez Votre Engagement :
              </Typography>
              <Typography>
                Nous vous encourageons à partager vos propres idées pour un Noël écologique ! Utilisez le hashtag #NoelEcologique et inspirez les autres à adopter des pratiques respectueuses de l'environnement pendant les fêtes.
              </Typography>
            </Section>

            <Section title="Changements Climatiques en Hiver">
              <Typography paragraph>
                Titre : Comprendre l'Impact du Changement Climatique sur la Saison Hivernale
              </Typography>
              Titre : Comprendre l'Impact du Changement Climatique sur la Saison Hivernale
              Introduction :
              La saison hivernale n'est pas à l'abri des effets du changement climatique. Cette campagne vise à sensibiliser sur les changements climatiques spécifiques à l'hiver et à promouvoir des actions pour atténuer leur impact.
              Impact du Changement Climatique en Hiver :
              Réduction de la neige : Apprenez comment le réchauffement climatique affecte la quantité de neige dans certaines régions et son impact sur les activités hivernales.
              Changements de Température : Explorez les variations de température extrêmes et leurs conséquences sur la faune, la flore et les écosystèmes hivernaux.
              Élévation du Niveau de la Mer : Découvrez comment le changement climatique contribue à l'élévation du niveau de la mer et à quel point cela peut affecter les régions côtières pendant l'hiver.
              Agissez dès Maintenant :
              Participez à notre campagne en partageant ces informations cruciales. Ensemble, engageons-nous à prendre des mesures pour atténuer les effets du changement climatique et protéger notre environnement hivernal.

              N'hésitez pas à personnaliser ce contenu en fonction de la tonalité et du style que vous souhaitez adopter pour votre association.
            </Section>

            <Section title="Mythe et Réalité">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" color="red">Mythe 1 :</Typography>
                  <Typography paragraph fontWeight="bold">
                    "S'il fait froid, il n'y a pas de changement climatique."
                  </Typography>
                  <Typography paragraph textAlign="justify">
                    Réalité : Le changement climatique est à la fois le réchauffement climatique et refroidissement climatique ne se mesure pas uniquement à la température quotidienne. Les variations climatiques à long terme montrent une tendance générale à la hausse de la température moyenne mondiale, avec des impacts significatifs sur les saisons, y compris l'hiver.
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" color="red"> Mythe 2 :</Typography>
                    <Typography paragraph fontWeight="bold" >
                      "La neige abondante prouve que le réchauffement climatique n'est pas réel."
                    </Typography>
                    <Typography paragraph textAlign="justify">
                      Réalité : Bien que certaines régions puissent connaître des chutes de neige importantes, le réchauffement climatique peut également entraîner des changements dans les modèles de précipitations, créant des conditions météorologiques extrêmes, y compris des chutes de neige inhabituelles.
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" color="red"> Mythe 3 :</Typography>
                    <Typography paragraph fontWeight="bold">
                      "Les hivers rigoureux prouvent que le climat n'est pas en train de changer."
                    </Typography>
                    <Typography paragraph textAlign="justify">
                      Réalité : Les variations naturelles de la météo peuvent coexister avec le changement climatique. Les hivers rigoureux ne contredisent pas la réalité du réchauffement climatique, qui se manifeste à long terme à l'échelle mondiale.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" color="red"> Mythe 4 :</Typography>
                    <Typography paragraph fontWeight="bold">
                      "Les changements climatiques n'affectent que les régions chaudes, pas les régions froides."
                    </Typography>
                    <Typography paragraph textAlign="justify">
                      Réalité : Le changement climatique affecte toutes les régions, y compris celles aux climats froids. Les conséquences peuvent inclure la fonte des glaces, des modifications dans les régimes de précipitations et des impacts sur la faune et la flore adaptées au froid.
                  </Typography>
                </Grid>
              </Grid>
            </Section>

            <Section title="Action à entreprendre">
              <Typography paragraph fontWeight="bold" style={{marginLeft: '7%'}}>
            1. Réduisez Votre Empreinte Carbone Hivernale :
              </Typography>
              <Typography paragraph textAlign="justify">
            Optez pour le chauffage écoénergétique. Éteignez les lumières et les appareils électriques non utilisés. Utilisez des couvertures et des vêtements chauds pour minimiser l'utilisation du chauffage.
              </Typography>
              <Typography paragraph fontWeight="bold" style={{marginLeft: '7%'}}>
            2. Adoptez un Mode de Vie Écologique pour les Fêtes :
              </Typography>
              <Typography paragraph textAlign="justify">
            Offrez des cadeaux durables et éthiques. Utilisez des emballages réutilisables ou recyclables. Choisissez des décorations de Noël écologiques et réutilisables.
              </Typography>
              <Typography paragraph fontWeight="bold" style={{marginLeft: '7%'}}>
            3. Participez à des Initiatives Locales :
              </Typography>
              <Typography paragraph textAlign="justify">
            Rejoignez des projets de nettoyage de l'environnement hivernal. Soutenez les fermes locales et les marchés de produits frais. Impliquez-vous dans des programmes de reboisement adaptés à l'hiver.
              </Typography>
              <Typography paragraph fontWeight="bold" style={{marginLeft: '7%'}}>
            4. Soyez un Ambassadeur de la Sensibilisation :
              </Typography>
              <Typography paragraph textAlign="justify">
            Partagez des informations sur le changement climatique en hiver sur les médias sociaux. Organisez des discussions communautaires sur les défis environnementaux hivernaux. Encouragez vos amis et votre famille à adopter des pratiques respectueuses de l'environnement.
              </Typography>
              <Typography paragraph fontWeight="bold" style={{marginLeft: '7%'}}>
            5. Réduisez, Réutilisez, Recyclez :
              </Typography>
              <Typography paragraph textAlign="justify">
            Minimisez les déchets en choisissant des produits avec un emballage minimal. Privilégiez les produits durables et réutilisables. Recyclez correctement et encouragez votre communauté à faire de même.
              </Typography>

            </Section>
          </Container>      
      <Footer />
    </>
    
  )
};

export default Home