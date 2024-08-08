export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 0,
          image: 'https://media2.castorama.pl/is/image/CastoramaPL/okno-pcv-rozwierne-rozwierno-uchylne-trzyszybowe-1465-x-1135-mm-symetryczne-biale~5908296733372_02c?$MOB_PREV$=&$width=64&$height=64',
          title: 'Okno 150x150 PCV białe',
          description: 'Okno PCV na profilu Salamander 73 ad z pakietem dwuszybowym 4/16/4. Współczynnik przenikania ciepła tego okna wynosi 1.46 W/m2K. W zestawie znajdują się: okno PCV, klamki, osłonki na zawiasy i odwodnienia, kotwy montażowe.',
          price: 1000.00,
        },
        {
          id: 1,
          image: 'https://static01.leroymerlin.pl/files/media/image/825/3054825/product/main.jpg',
          title: 'Okno 150x150 PCV orzech obustronny',
          description: 'Okno PCV na profilu Salamander 73 ad z pakietem dwuszybowym 4/16/4. Współczynnik przenikania ciepła tego okna wynosi 1.46 W/m2K. W zestawie znajdują się: okno PCV, klamki, osłonki na zawiasy i odwodnienia, kotwy montażowe.',
          price: 1200.00,
        },
        {
          id: 2,
          image: 'https://image.ceneostatic.pl/data/products/144892429/i-alucon-invest-okno-pcv-150x150-ru-r-zloty-dab.jpg',
          title: 'Okno 150x150 PCV złoty dąb obustronny',
          description: 'Okno PCV na profilu Salamander 73 ad z pakietem dwuszybowym 4/16/4. Współczynnik przenikania ciepła tego okna wynosi 1.46 W/m2K. W zestawie znajdują się: okno PCV, klamki, osłonki na zawiasy i odwodnienia, kotwy montażowe.',
          price: 1200.00,
        },
        {
          id: 3,
          image: 'https://okucia-sklep.pl/7411-large_default/klamka-okienna-victory-aluminiowa-medos.jpg',
          title: 'Klamka Victory biała',
          description: 'Klamka Victory w kolorze białym. Wykonana z aluminium, przeznaczona do okien PCV. Rozstaw śrub mocujących standardowy.',
          price: 10.00,
        },
        {
          id: 4,
          image: 'https://www.wszystko-do-okien.pl/images/produkt/jpg/21266_0/1024/1024/c/1327016M3545D-Klamka-okienna-Victory-aluminiowa-Antracyt-Medos.jpg',
          title: 'Klamka Victory antracyt',
          description: 'Klamka Victory w kolorze antracyt. Wykonana z aluminium, przeznaczona do okien PCV. Rozstaw śrub mocujących standardowy.',
          price: 15.00,
        },
        {
          id: 5,
          image: 'https://wszystkonadachy.pl/userdata/public/gfx/3419/fe48885d488c9199a22e29a98114.jpg',
          title: 'Klamka Victory brąz',
          description: 'Klamka Victory w kolorze brąz. Wykonana z aluminium, przeznaczona do okien PCV. Rozstaw śrub mocujących standardowy.',
          price: 15.00,
        },
      ],
      newProduct: {
        id: null,
        image: '',
        title: '',
        description: '',
        price: null,
      }
    }
  },
  mutations: {
    addProd(state) {
      const newProd = {
        id: new Date().toISOString(),
        image: state.enteredImage,
        title: state.enteredTitle,
        description: state.enteredDescription,
        price: state.enteredPrice,
      }
      state.products.push(newProd);
    },
    enteredImage(state, value) {
      state.enteredImage = value
    },
    enteredTitle(state, value) {
      state.enteredTitle = value
    },
    enteredDescription(state, value) {
      state.enteredDescription = value
    },
    enteredPrice(state, value) {
      state.enteredPrice = value
    },

    selectToEdit(state, prodId) {
      state.products = state.products.filter((product) => product.id === prodId)
    },
    deleteProduct(state, prodId) {
      state.products = state.products.filter((product) => product.id !== prodId)
    }
  },
  getters: {
    products(state) {
      return state.products
    },
    newProduct(state) {
      return state.newProduct
    }
  }
}