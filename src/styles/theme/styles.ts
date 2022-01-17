const styles = {
  global: {
    body: {
      bg: 'text.light',
      color: 'text.dark',
      width: '100vw',
      minHeight: '100vh',
      overflowX: 'hidden',
    },
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'semibold',
    },
    h3: {
      fontWeight: 'medium',
    },
    '.swiper-button-prev': {
      color: 'primary.highlight',
      width: '60px',
      height: '60px',
      left: '20px',
    },
    '.swiper-button-next': {
      color: 'primary.highlight',
      width: '60px',
      height: '60px',
      right: '20px',
    },
    '.swiper-button-prev::after': {
      fontSize: '3xl',
    },
    '.swiper-button-next::after': {
      fontSize: '3xl',
    },
    '.swiper-pagination-bullet.swiper-pagination-bullet-active': {
      bgColor: 'primary.highlight',
    },
    '.swiper-pagination-bullet': {
      bgColor: 'info.dark',
      opacity: 1,
    },
  },
};

export { styles };
