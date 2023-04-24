export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image: 'https://www.sklep.kimokna.pl/images/Okno-PCV-150x150-dwuskrzydlowe-na-slupku-ruchomym-biale-dk2-b-1.800x600.jpg',
          title: 'Okno 150x150 PCV białe',
          description: 'Okno PCV na profilu Salamander 73 ad z pakietem dwuszybowym 4/16/4. Współczynnik przenikania ciepła tego okna wynosi 1.46 W/m2K. W zestawie znajdują się: okno PCV, klamki, osłonki na zawiasy i odwodnienia, kotwy montażowe.',
          price: 1000.00,
        },
        {
          id: 'p2',
          image: 'https://www.sklep.kimokna.pl/images/Okno-PCV-150x150-dwuskrzydlowe-na-slupku-ruchomym-zloty-dab-dk2-zd-1.800x600.jpg',
          title: 'Okno 150x150 PCV orzech obustronny',
          description: 'Okno PCV na profilu Salamander 73 ad z pakietem dwuszybowym 4/16/4. Współczynnik przenikania ciepła tego okna wynosi 1.46 W/m2K. W zestawie znajdują się: okno PCV, klamki, osłonki na zawiasy i odwodnienia, kotwy montażowe.',
          price: 1200.00,
        },
        {
          id: 'p3',
          image: 'https://image.ceneostatic.pl/data/products/144892429/i-alucon-invest-okno-pcv-150x150-ru-r-zloty-dab.jpg',
          title: 'Okno 150x150 PCV złoty dąb obustronny',
          description: 'Okno PCV na profilu Salamander 73 ad z pakietem dwuszybowym 4/16/4. Współczynnik przenikania ciepła tego okna wynosi 1.46 W/m2K. W zestawie znajdują się: okno PCV, klamki, osłonki na zawiasy i odwodnienia, kotwy montażowe.',
          price: 1200.00,
        },
        {
          id: 'p4',
          image: 'https://zamowienia.medos.pl/images/_popup/klamka_okienna_victory-ral9001.jpg',
          title: 'Klamka Victory biała',
          description: 'Klamka Victory w kolorze białym. Wykonana z aluminium, przeznaczona do okien PCV. Rozstaw śrub mocujących standardowy.',
          price: 10.00,
        },
        {
          id: 'p5',
          image: 'https://zamowienia.medos.pl/images/_popup/klamka_okienna_victory-ral7016.jpg',
          title: 'Klamka Victory antracyt',
          description: 'Klamka Victory w kolorze antracyt. Wykonana z aluminium, przeznaczona do okien PCV. Rozstaw śrub mocujących standardowy.',
          price: 15.00,
        },
        {
          id: 'p6',
          image: 'https://wszystkonadachy.pl/userdata/public/gfx/3419/fe48885d488c9199a22e29a98114.jpg',
          title: 'Klamka Victory antracyt',
          description: 'Klamka Victory w kolorze antracyt. Wykonana z aluminium, przeznaczona do okien PCV. Rozstaw śrub mocujących standardowy.',
          price: 15.00,
        },
      ]
    }
  },
  getters: {
    products(state) {
      return state.products
    }
  }
}