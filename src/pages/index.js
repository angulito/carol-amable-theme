import * as React from 'react';

import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';

const IndexPage = () => {

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/terra-cumple-2.png'}
        title={'FELIZ SUPER CUMPLEAÑOS CAROL'}
        subtitle={'Eres una persona muy amable, buena amiga y maravillosamente genial, te mereces lo mejor!'}

        // maxWidth={'500px'}
        // image={'/terrabirthday.jpeg'}
        // title={'Feliz cumpleaños Carol'}
        // subtitle={'Eres una persona muy amable'}
        // ctaText={'shop now'}
        // ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        
        <h1 style={{"font-size" : '32px'}}>
        ¡Felicitaciones, Carol! 🎉
        </h1>
        <h1 style={{"font-size" : '32px'}}>
        Tu creatividad ilumina cada aula y tus habilidades artísticas inspiran a todos. Que este año te traiga más momentos para disfrutar de tus juegos de mesa favoritos, y que los sigamos disfrutando juntos, incluso aunque nos ganes! Sigue plasmando tu arte en cada lienzo de la vida, porque eres genial. ¡Felicidades en tu día! 🎨🎲🎂❤️
        </h1>

      </div>

    </Layout>
  );
};

export default IndexPage;
