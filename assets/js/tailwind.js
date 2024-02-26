tailwind.config = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
       
      }, 
      backgroundImage: {
        'homered': "url('/assets/images/homeredback.png')",
      },
      fontFamily: {
        'sans': ['Open Sans', sans-serif],  
      },
      colors: {
        clifford: '#da373d',
        oran:'#ff9d2d',
      },
    }
  }
}